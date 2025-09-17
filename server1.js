var http = require('http');

http.createServer(function (req, res) {
    // res.end('Hello, selamat datang di node js!');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello <b>World</b>! </br></h1>');
    res.write('<h2><b><u>Selamat datang di Node.js menggunakan server dengan alamat 3000</u></b></h2>');
    res.end();
}).listen(3000);

console.log('Server running on http://localhost:3000');