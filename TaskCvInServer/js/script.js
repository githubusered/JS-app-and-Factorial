// var http = require('http');
// var fs = require('fs');
// const { response } = require('express');


// function onRequest(request, response){
//     response.writeHead(200, {'Content-Type' : 'text/html'});
//     fs.readFile('../cv_IlonMusk.html', null, function(error, data){
//         if(error){
//             response.writeHead(404);
//             response.write('File Not found!');
//         }else{
//             response.write(data);
//         }
//         response.end();
//     });
// }

// http.createServer(onRequest).listen(6000);
// ******************************************************************************
var express = require('express');
var app = express();
var PORT = 3000;
var a;
app.get('', function (req, res) {
    console.log(req.path);
    
  res.sendFile(__dirname + "/index.html");
  });
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});