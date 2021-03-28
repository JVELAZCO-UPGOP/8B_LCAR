//Dependencias 
const requestHandler = require('./request-handler');

const server = requestHandler;

server.listen(5000, () => {
    console.log(
        "el servidor está escuchando peticiones en https://localhost:5000"
    );
});
//entramos con localhost:5000 