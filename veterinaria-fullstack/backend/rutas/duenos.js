module.exports = function duenosHandler(duenos) {
    return {
        get: (data, callback) =>{
            if (typeof data.indice !== "undefined") {
                console.log('Handler de dueños', {data});
                if (duenos[data.indice]) {
                    return callback(200, duenos[data.indice]);
                }
                return callback(404, {
                    mensaje: `dueño con indice ${data.indice} no encontrado`,
                });
            }
            callback(200, duenos);
        },
        post: (data, callback) =>{
            duenos.push(data.payload);
            callback(201, data.payload);
        },
        put: (data, callback) =>{
            if (typeof data.indice !== "undefined") {
                if (duenos[data.indice]) {
                    duenos[data.indice] = data.payload;
                    return callback(200, duenos[data.indice]);
                }
                return callback(404, {
                    mensaje: `dueño con indice ${data.indice} no encontrado`,
                });
            }
            callback(400, {mensaje: 'no enviaste el indice'});
        },
        delete:(data, callback) =>{
            if (typeof data.indice !== "undefined") {
                if (duenos[data.indice]) {
                    duenos = duenos.filter(
                        (_dueno, indice) => indice != data.indice
                    );
                    return callback(204, {mensaje: `Elemento con indice ${data.indice} eliminado`});
                }
                return callback(404, {
                    mensaje: `dueño con indice ${data.indice} no encontrado`,
                });
            }
            callback(400, {mensaje: 'no enviaste el indice'});
        },
    }
}