var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('login.html',function(err,data){
        res.writehead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });

}).listen(3030);