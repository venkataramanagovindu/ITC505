const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/home') {
        res.statusCode = 200;
        res.end('Welcome to Home Page');
    } else if (req.url === '/set-cookie') {
        res.setHeader('Set-Cookie', 'name=Venkat; email=venkat@example.com');
        res.end('Cookies set');
    } else if (req.url === '/get-cookie') {
        const cookies = req.headers.cookie;
        res.end(`Cookies retrieved: ${cookies}`);
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});
