const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
// http://localhost:8080/readFile?name=jack&age=18

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
};

const app = http.createServer((req, res) => {
  res.writeHead(200, defaultCorsHeaders);

  const { pathname, query } = url.parse(req.url, 'true');
  if (pathname == '/readFile') {
    console.log(query);
    const data = fs.readFileSync(
      path.resolve(__dirname, './index.html'),
      'utf-8',
    );
    res.end(JSON.stringify(query));
  }
});

app.listen(8080, () => {
  console.log('服务创建成功');
});
