const http= require('http');
const fs= require('fs');
http.createServer((req,res)=>{
res.writeHead(
    200, {'Content-Type':'text/plain'}
);  
var myfile1=fs.readFileSync(__dirname+'/writefile.txt');
res.end(myfile1);

}).listen(1337,'127.0.0.1');
http.createServer((req,res)=>{
    res.writeHead(
        200, {'Content-Type':'text/plain'}
    );  

    var myfile2=fs.readFile(__dirname+'/writefile.txt','utf8', (error, data)=>{
  res.end(data);
    });
    
    
    }).listen(1330,'127.0.0.1');
    http.createServer((req,res)=>{
        res.writeHead(
            200, {'Content-Type':'text/plain'}
        );  
    
        var myfile2=fs.createReadStream(__dirname+'/writefile.txt').pipe(res);
        
        
        }).listen(1340,'127.0.0.1');
