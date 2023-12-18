const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((reg, res)=>{
    res.writeHead(200, { 'Content-Type' : 'Text/plain'})
    res.end('Hello world NodeJS!')
})

server.listen(port, () => console.log(`server started on port ${port}; ` + 'press Ctrl-C to terminate....'))