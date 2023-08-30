const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.write('HI');
    res.end();
  }

  if (req.method === 'POST' && req.url === '/data') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      res.setHeader('Content-Type', 'application/json');
      res.write(body);
      res.end();
    });
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
