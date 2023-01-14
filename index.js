//引入http内置模块
const http = require('http');
const signIn = require('./app');
//设置主机名和端口号
const hostname = '127.0.0.1';
const port = 4401;

//调用http对象的createServer方法，创建一个服务器（接收请求，响应请求）
const server = http.createServer(async (req, res) => {
  const PunchIn = await signIn();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(JSON.stringify(PunchIn));
});

//调用服务器的listen方法，监听主机的端口
server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`); //模板字符串
});
