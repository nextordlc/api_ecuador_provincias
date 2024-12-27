"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadServiceApi = exports.loadService = void 0;
const message_no_load = 'El servicio está conectado pero no se ha cargado correctamente';
const loadService = (_req, res) => {
    try {
        res.send("El servicio está conectado y funcionando correctamente");
    }
    catch (error) {
        res.status(404).send(message_no_load);
    }
};
exports.loadService = loadService;
const loadServiceApi = (req, res) => {
    try {
        const { anyvalue } = req.params;
        if (anyvalue === undefined) {
            res.status(404).send("Error");
        }
        else if (anyvalue.toString() === "api") {
            res.json({
                message: "Bienvenido a API REST ECUADOR, este servicio fue desarrollado para listar provincias, cantones y parroquias del país de Ecuador, su uso es libre",
                details: "Para más detalles de la configuración y uso de esta API REST dirigase a la página: **Ingrese link**",
                licence: "Apache License 2.0"
            });
        }
        else {
            res.send(`Esta ruta no está específicada en este servicio: ${anyvalue}`);
        }
    }
    catch (error) {
        res.status(404).send(message_no_load);
    }
};
exports.loadServiceApi = loadServiceApi;
