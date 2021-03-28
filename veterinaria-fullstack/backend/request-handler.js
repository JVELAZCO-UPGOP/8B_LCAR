const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const enrutador = require('./enrutador');

module.exports = http.createServer((req,res) =>{
    // 1. Obtener url desde el objeto request
        const urlActual = req.url;
        const urlParseada = url.parse(urlActual, true);
    // 2. Obtener la ruta
        const ruta = urlParseada.pathname;

    // 3. Quitar slash
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, '');
        
    //3.1 Obtener el metodo http
    const metodo = req.method.toLowerCase();

    //3.1.1 Dar permisos de cors
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Request-Methods","OPTIONS,GET,PUT,DELETE,POST");
    res.setHeader("Access-Control-Allow-Methods","OPTIONS,GET,PUT,DELETE,POST");
    res.setHeader("Access-Control-Allow-Headers","*");

    //3.1.2 metodo a devolver si alguien externo hacer peticiones
    if (metodo === 'options') {
        res.writeHead(200);
        res.end();
        return;
    }

    //3.2 Obtener las variables del query url
    const { query = {} } = urlParseada;

    //3.3 Obtener los headers
    const {headers} = req;
    console.log(headers);

    // 3.4 Obtener payload, en caso de que haya
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    //3.4.1 Acumular data cuando el request reciba el payload
    req.on('data', (data)=> {
        buffer += decoder.write(data);
    });
    
    //3.4.2 Terminar de acumular datos y decirle al decoder que pare
    req.on('end', ()=> {
        buffer += decoder.end();

        if (headers["content-type"] === 'application/json') {
            buffer = JSON.parse(buffer)
            
        }

        // 3.4.3 Revisar si tiene subrutas (indice del array)
        if (rutaLimpia.indexOf('/') > -1) {
            //separar las rutas
            var [rutaPrincipal,indice] = rutaLimpia.split('/');
        }

        //3.5 Ordenar los datos de respuesta (data)
        const data = {
            indice,
            ruta: rutaPrincipal || rutaLimpia,
            query,
            metodo,
            headers,
            payload:buffer
        };

        //3.6 Elegir el manejador dependiendo de la ruta y asignarle una funcion
        let handler;
        if (data.ruta && enrutador[data.ruta] && enrutador[data.ruta][metodo]) {
            handler = enrutador[data.ruta][metodo];
        } else {
            handler = enrutador.noEncontrado;
        }

        // 4. Ejecutar handler para enviar la respuesta
        if (typeof handler === 'function') {
            handler(data, (statusCode = 200, mensaje)=>{
                const respuesta = JSON.stringify(mensaje);
                res.setHeader('Content-Type','application/json');
                res.writeHead(statusCode);
                // linea donde realmente ya estamos respondiendo a la aplicacion cliente
                res.end(respuesta);
            })
        }
    });    
});