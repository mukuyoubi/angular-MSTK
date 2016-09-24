var http = require('http');
var fs = require('fs');
var url = require('url');


// 创建服务器
http.createServer( function (request, response) {  
   // 解析请求，包括文件名
   var pathname = url.parse("/angularserver/www"+request.url).pathname;
   
   // 输出请求的文件名
   console.log("Request for " +"angularserver/www"+pathname + " received.");
   
   // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else if (request.url.indexOf('.html')!=-1)
       {	         
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         response.write(data.toString());		
      }
      else if (request.url.indexOf('.css')!=-1){
         response.writeHead(200, {'Content-Type': 'text/css'});	
         response.write(data.toString());	
      }
      else if(request.url.indexOf('.js')!=-1){
      	 response.writeHead(200, {'Content-Type': 'application/javascript'});	
         response.write(data.toString());	
      }
      else if(request.url.indexOf('.png')!=-1){
      	 response.writeHead(200, {'Content-Type': 'application/x-png'});	
         response.write(data.toString());	
      }
      else if(request.url.indexOf('.woff')!=-1){
      	 response.writeHead(200, {'Content-Type': 'application/font-woff'});	
         response.write(data.toString());	
      }
      else if(request.url.indexOf('.ttf')!=-1){
      	 response.writeHead(200, {'Content-Type': 'application/octet-stream'});	
         response.write(data.toString());	
      }
      //  发送响应数据
      response.end();
   });   
}).listen(8081);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');