const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write("hello this is my home page")
        res.end()
    }
    if (req.url === '/about'){
        res.write("hello this is my about page")
        res.end()
    }
    
    res.end(` <h1>oops</h1>
    <p>this page dosent exist</p>
    <a href="/about">back home</a>
`)
   
})

server.listen(5000)