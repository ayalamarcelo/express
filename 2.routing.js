const http = require("node:http");

// commonJS -> modulos
const dittoJSON = require("./pokemon/ditto.json");

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(JSON.stringify(dittoJSON));
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end("<h1>404</h1>");
      }
    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";
          //  escuchar el evento data
          req.on('data', chunk => { // chunk es un buffer pq va recibiendo binarios
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            // llamar a una base de datos para guardar la info 
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf=8' })

            data.timestamp = Date.now()

            res.end(JSON.stringify(data))
          }) // lo mismo que ha llegado deberia de volver

          break
        }

        
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end("<h1>404</h1>");
      }
  }
};

const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.log("ser listening on port http://localhost:1234");
});
