const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')

    if (req.url === '/') {
        res.statusCode = 200 // OK
        res.end('Bienvenido a mí página de inicio')
    } else if (req.url === '/contacto') {
        res.statusCode = 200 // Ok
        res.end('<h1>Contacto</h1>')
    } else {
        res.statusCode = 404 // Not Found
        res.end('<h1>404</h1>')

    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
})