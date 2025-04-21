const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const port = 5000;
const baseDirectory = __dirname; // Current working directory

// Define MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url);
    let pathname = path.join(baseDirectory, parsedUrl.pathname);

    // Prevent directory traversal attack
    if (!pathname.startsWith(baseDirectory)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Access Denied');
        return;
    }

    // If root URL, list directory contents
    if (parsedUrl.pathname === '/') {
        fs.readdir(baseDirectory, (err, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>Directory Listing</h1><ul>${files.map(file => `<li><a href="${file}">${file}</a></li>`).join('')}</ul>`);
        });
        return;
    }

    // Check if the file exists
    fs.stat(pathname, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found!');
            return;
        }

        // Get MIME type based on file extension
        let ext = path.extname(pathname).toLowerCase();
        let contentType = mimeTypes[ext] || 'application/octet-stream';

        // Read and serve the file
        fs.readFile(pathname, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
