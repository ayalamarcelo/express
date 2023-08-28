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

## Status Codes

100-199: Respuestas informativas
200-299: Respuestas satisfactorias
300-399: Redirecciones
400-499: Errores del cliente
500-599: Errores del servidor

Más típicos

200 OK
301 Moved Permanently
400 Bad Request
404 Not Found
500 Internal Server Error

`mdn web docs` Para más información.

# Nodemon(Alternative to watch)

`npm init -y`
`npm install nodemon -D` como si fuese una dependencia de desarrollo con -D
No hace falta hacerlo de forma global, al hacerlo de forma global significa que una persona que por lo que sea se está instalando este proyecto, no va a saber que necesita nodemon y además no vas a tener la opción de tener más de una versión de nodemon.
Lo más fácil es ponerlo como dependencia y lo que se debe hacer es utilizar `scripts` (scripts de npm).

`"dev": "nodemon 1.https.js"` una vez hecho esto.
`npm run dev` además crea una capa de abstracción.
Entras a un proyecto hace un `npm run` y vez todos los scripts disponibles y haces `npm run dev` y directamente esto ya te ejecuta nodemon y está funcionando perfectamente.

# Evitar hacerlo de forma global

Cada vez que cambiemos de versión de node, vamos a perder todos los paquetes que hemos instalado de forma global.

## Headers

# 37:21

Tenemos el data que es un buffer, un buffer en nodejs es una clase global que la utilizan para trabajar con datos binarios. Si tu lees un archivo txt, una imágen o lo que sea. Lo que está pasando es que lee el archivo, pero no lo está leyendo como tu esperas. Lo que está leyendo son los datos binarios. Entonces lo guarda en un espacio de la memoria física y ahi en ese espacio reservado tiene esos datos de forma temporal para que puedas tratarlos. En este caso, estamos leyendo el fichero `./placa.png` no sabe que es una imágen, simplemente lo que hace es leer estos datos binarios, los deja reservados en un espacio y ese espacio reservado es un *buffer* ahi tendriamos esos datos, pero como datos binarios. Lo que estamos diciendo es, esos datos binarios quiero que me los envies a la respuesta, pero ojo esta respuesta es una imágen png. Y ahí es cuando ocurre la magia de la codificación. Donde el navegador, pese a que nosotros le estamos enviando los datos binarios tal y como lo hemos leido, como le estamos diciendo que es una imágen, entonces va a ser capaz de hacerlo. Los buffer son útiles trabajando con archivos, imágenes, criptografia para cualquier cosa que no sean cadenas de texto, números, planos, cosas así o json. Normalmente son útiles. Y son esenciales a la hora de trabajar con transmisiones de datos por como se leen los datos de archivos o para recibirlos a través de la red.

# 39:05

Así enviamos desde un servidor las imágenes.

# 40:00

## Creating API + HTTP Methods

Para crear nuestra primera api, vamos a tener diferentes métodos porque hasta ahora solo hemos tenido el método GET, el método get es que hace por efecto que una página web cuando tu entras a la url. Pero no es todos los métodos que existen. 

# GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH.

GET, para recuperar datos.
HEAD, es exactamente lo mismo que el get, solo que se utiliza para pedirle que si se pueda hacer la petición que no hace falta que me des el body, no me importa el cuerpo de la petición, no quiero la respuesta del cuerpo, no quiero los datos. Lo único que quiero ver es la cabecera de respuesta. 
*A veces se hace para saber si un usuario tiene permisos.*
POST, para crear una entidad de un recurso.
PUT, sería para reemplazar un recurso que ya existe. Actualizar una parte.
DELETE, para eliminar un recurso.
OPTIONS, te describe los recursos. Muchas veces es el problema que tienes con el CORS. Devuelve las cabeceras de CORS.
POST, para crear un recurso entero.

Post para crear, put para reemplazar todo el recurso y el patch para mmodificar parcialmente una parte de ese recurso.

## Option Cors Method

Rest api: vamos a tener un fichero al que le vamos a poder explicar cada uno de los recursos.

`chunk.toString()` porque los datos que los datos que estamos enviando aqui:

{ 
    "name": "ditto",
    "type": "normal",
    "moves": [
        "transform"
    ]
}

Mientras estan enviandose es un dato binario pero cuando estamos llegando podemos transformar un binario a un string y al transformarlo directamente se va a codificar exactamente.

Queremos enviar esto: 

{ 
    "name": "ditto",
    "type": "normal",
    "moves": [
        "transform"
    ]
}

que va a hacer *chunk*:

### chunk 1
{  
    "na
### chunk 2
       me": "ditt
### chunk 3
                o",
}

No siempre va a llegar la misma longitud. Va siendo de forma progresiva. Al final tendremos todos los chunks que se habran juntado. Al `let body = ''`

Con esto hemos terminado una api nativa.

### Express

# 58:35

## Integrating Express

Express es el framework más utilizado. Es un framework para node.js. Que te permite hacer aplicaciones web, apis.
Vamos a ver cómo utilizar express para recrear lo que hemos hecho Qué diferencias hay, qué nos aporta express y cómo podemos migrar lo que hemos aprendido y cómo funciona pero a express, y en qué nos ayuda y cuál es su ventaja.

## First steps with express

Instalar express: `npm i express -E` express es una dependencia de producción, así que modo exacto.

Primero, importamos express `const express = require('express')`
Luego, creamos la aplicación con express `const app = express()`
Luego el puerto `const PORT = process.env.PORT ?? 8000`
`app.get ` esta basado en las rutas, lo que quiere decir es que la app y luego le decimos la accion, aqui le decimos el metodo get. En la app cada vez que reciba un get en la ruta '/', entonces quiero que me respondas y aqui tendriamos una funcion que seria la que responde cuando hace un get en esta ruta. 

# 1:02:26

Diferencias: no le he puesto el content-type y ha detectado que es un html. Express automaticamente va a detectar muchas veces cual es el content-type correcto que tiene que usar dependiendo de la respuesta que se este utilizando. Te va a quitar un monton de codigo.
Si estamos poniendo que es un html, por defecto va a detectar que es un html.
`res.send('<h1>mi pagina</h1>)`.

Otras formas de devolver un JSON:

`res.json({ message: 'Hola mundo' })` lo que dice por dentro es que, ya pasame le json que yo hago el stringify, ya le cambio el content-type y todo, entonces cuando entraes ya me esta devolviendo un json.

Otra de las facilidades, por ejemplo la de las rutas: 
# 1:04:32

Quitar `X-Powered-By:` puede ser un problema de seguridad, por suerte solo aparece la tecnologia. Ademas si apareciese la version seria un problema muy grave. imaginate tener una version que tenga un bug critico.
Para desactivarlo: 

En la app:

`const app = express()`
`app.disable('x-powered-by)`

# 1:07:47