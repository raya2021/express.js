const http =require('http')

const server = http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('welcome to our page' )

    }
    if(req.url==='/about'){
        res.end('This is our short history')
    }
    res.end(
   ` <h1>Oops</h1>
   <p> We cant find this page </p>
   <a href='/'>Back Home</a>
   `
    )
    //console.log(req)
    //res.write('welcome to our page' )
    //res.end()
})
server.listen(5000)