## Primer Servidor web con Node.JS

Vamos a tener la dependencia http, para eso `node:http` esto es un módulo nativo. Qué nos permite http, hacer procesos y conexiones con el protocolo http como por ejemplo crear un servidor y poder recibir request, peticiones.

Un servidor puede hacer solo dos cosas: o recibir una petición o devolver una respuesta. Por eso tendremos un callback que va a gestionar la request y el response. Asi cada vez que llegue una request vamos a poder responderle con algo.

// cuando recibo una peticion voy a devolver y responder y terminar la comunicacion con el mesje 'hola mundo'.

El puerto 0, lo que va a hacer es que automáticamente va a buscar el primer puerto que encuentre que esté disponible.
El server lo podemos utilizar para recuperar el puerto.

## Aplicacion con node que nos diga el puerto disponible

*Dotenv: biblioteca para variables de entorno.*

## API

`1.http.js` importamos el código, creamos un servidor, para eso llamamos al método `createServer` que recibe un *callback* . Los callbacks son funciones que se ejecutan después de que pase algo. Normalmente cuando son cosas asíncronas, una vez que recibe una request, cada vez que recibe una petición, se ejecutará esta función de aquí `console.log('request received')...` y le deciamos, la respuesta la terminamos enviando un 'hola mundo'. Con esto tenemos el servidor.
Luego, escuchar en el servidor con un puerto `server.listen`, y finalmente el callaback que tenemos, es cuando ya se ha levantado ese servidor en ese puerto para tener esa información en consola.

# 5:16  

Lo que hace el navegador cuando tu entras a una página web es automáticamente dos request, y esto es porque hacemos una petición desde el navegador.
Primero hace la petición que le hemos hecho y luego hace la petición del favicon. 
Para entender esto tendriamos que entender cómo funciona la request, y es la forma en la que vamos a empezar a traernos información de la request `req.url` y discriminar nuestra api. Discriminar significa que nuestra api dependiendo de los headers, dependiendo de que ruta es y todo eso tendran que responder de formas distintas.
`cntrl + c para cerrar la terminal`.
Si voy a la terminal `curl http..` no me trae el favicon, esa petición la hace el navegador.

## HTTP

Es el protocolo de transferencia de hipertexto, es el protocolo de red más utilizado para transmitir información, especialmente páginas web.

<-- <-- <-- <-- <-- <-- status code, headers, body <-- response (respuesta)
usuario (dispositivo) --> request(petición) --> servidor <-procesar->
               urls, headers, methods(get), body

# 17:00 

Las funciones en javascript son de primera clase, por lo tanto se pueden pasar como parametros.

## Watch

`node --watch`

Como se renderiza la codificación de los caracteres `res.setHeader('Content-Type', 'text/plain; charset=utf-8')`.

## Status Codes

# 26:23
