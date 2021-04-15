const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
    const { createDonorDetails,
        notFoundUrl, getForm } = require('../controller/donorController');
    const reqUrl = req.url;
    let parUrl = url.parse(reqUrl, true);

    // Get endpoint
    if (req.method === 'GET') {
        switch (reqUrl) {
            case '/':
                getForm(req, res);
                break;
            case '/css/index.css':
                getForm(req, res);
                break;
            case '/js/script.js':
                getForm(req, res);
                break;
            default:
        }

    }

    // POST endpoint
    else if (parUrl.pathname == '/donor' && req.method === 'POST') {
        createDonorDetails(req, res);
    }

    // invalid URL
    else {
        notFoundUrl(req, res);
    }
})
