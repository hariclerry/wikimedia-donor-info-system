const querystring = require('querystring');
const connection = require('../database/database');
const serveStaticFILE = require('../utils/utils');

// handles form rendering 
const getForm = (req, res) => {

    try {
        serveStaticFILE(req, res);
    } catch (err) {
        console.log(err);
    }
}

//handles create/add donor info
const createDonorDetails = (req, res) => {

    let body = '';
    try {
        req.on('data', (data) => {
            body += data;
            if (body.length > 1e6)
                req.connection.destroy();
        });

        req.on('end', () => {

            let parsedData = req.headers['content-type'] === 'application/json' ? JSON.parse(body) : querystring.decode(body);
            const { lName, fName, address, city,
                region, country, code, phone,
                email, contact, payment, frequency,
                amount, comments } = parsedData;

            if (!lName || !fName || !address ||
                !city || !region || !country ||
                !code || !phone ||
                !email || !contact ||
                !payment || !frequency || !amount || !comments) {
                res.writeHead(400, { message: 'Invalid request!' });
            } else {
                let donorTable = `create table if not exists donor(
                            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                            lName VARCHAR(50) NOT NULL,
                            fName VARCHAR(50) NOT NULL,
                            address VARCHAR(100) NOT NULL,
                            city VARCHAR(50) NOT NULL,
                            region VARCHAR(50) NOT NULL,
                            country VARCHAR(50) NOT NULL,
                            code VARCHAR(50) NOT NULL,
                            phone VARCHAR(15),
                            email VARCHAR(50) NOT NULL,
                            contact VARCHAR(50) NOT NULL,
                            payment VARCHAR(10) NOT NULL,
                            frequency VARCHAR(10) NOT NULL,
                            amount INT(100) NOT NULL,
                            comments TEXT NOT Null
                      )`;

                connection.query(donorTable, function (err, results, fields) {
                    if (err) {
                        console.log(err.message);
                    }
                });

                return connection.query(`INSERT INTO donor ( lName, fName, address, city,
                region, country, code, phone,
                email, contact, payment, frequency,
                amount, comments) VALUES ( '${lName}', '${fName}', '${address}',
                '${city}', '${region}', '${country}',  '${code}', '${phone}', '${email}', '${contact}', '${payment}', '${frequency}', '${amount}', '${comments}')`, function (err, rows, fields) {
                    if (!err) {
                        res.writeHead(201, { message: 'Donor details added successfully' });
                    }
                    else {
                        console.log('Error while performing Query.', err);
                    }
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Submission successful! Thank you for donating to Wikimedia Foundation');
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.statusCode = 500;

    }
}

// handles invalid urls
const notFoundUrl = (req, res) => {
    res.statusCode = 404;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify('Page not Found'))
}

module.exports = {
    createDonorDetails,
    getForm,
    notFoundUrl
}