//http module

const http=require('http');

const server=http.createServer((req,res)=>{

    console.log(req.url);
    console.log(req.method);
    if(req.url=='/')
    {
        res.setHeader('Content-Type','text/html');
        res.write('hello world');
        res.statusCode=200;
        res.end();
    }
    else if(req.url=='/about')
    {
        res.setHeader('Content-Type','text/html');
        res.write('hello world from about');
        res.statusCode=200;
        res.end();
    }
});

server.listen(3000,()=>{
    console.log('server is running on port 3000');
})



















/*const http=require('http');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write("hello");
    res.statusCode=200;
    res.end();
});

server.listen(3000,(()=>{
    console.log("running ")
}))*/
