const express = require('express') // importamos

const app = express() // podemos pasarle diferentes opciones
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 8000 // el puerto

// nuestro primer endpoint que vamos a hacer 
app.get('/', (req, res) => {
    // esta res es mas especial y mas amplia
    res.send('<h1>Mi pagina</h1>') // aqui el status en 200
    // y ahora le podemos enviar mi pagina
    // cuando la app recibe un get
    // en esta ruta, entonces ejecutas esta funcion
})

app.post('/pokemon', (req, res) => {
    let body = ''

    // escuchar evento data
    req.on('data', chunk => {
        body += chunk.toString()
    })

    req.on('end', () => {
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        res.status(201).json(data)
    })
})
// funciona igual

// tenemos que levantar y escuchar un puerto

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})

