const fs = require('fs');
const path = require('path');

const serveStaticFILE = (request, response) => {
    //set the base path so files are served relative to index.html
    var basePath = "./public";
    var filePath = basePath + request.url;

    var contentType = 'text/html';
    var extname = path.extname(filePath);
    //get right Content-Type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    //default to index.html
    if (filePath == basePath + "/") {
        filePath = filePath + "index.html";
    }

    //Write the file to response
    fs.readFile(filePath, function (error, content) {
        if (error) {
            response.writeHead(500);
            response.end();
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}

module.exports = serveStaticFILE;
