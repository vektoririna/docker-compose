const http = require("http");

http.createServer(function(request,response){
    console.log(`Request to app on port ${process.env.PORT} request ${request.url}`)
    response.end(`Hello, it's me ${process.env.HELLO_MESSAGE}`);
}).listen(process.env.PORT || 3000, ()=>{console.log(`our app is running on port ${process.env.PORT} `)});