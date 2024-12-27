"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceNotImplemented = exports.badRequest = exports.handleHttp = void 0;
const serviceNotImplemented = (res) => {
    return res.status(404).json({ message: "Esté metodo no está implementado por cuestiones de rendimiento" });
};
exports.serviceNotImplemented = serviceNotImplemented;
const badRequest = (res) => {
    return res.status(400).json({ message: "Bad Request. Please fill all field." });
};
exports.badRequest = badRequest;
const handleHttp = (res, error) => {
    res.status(500);
    res.send({ error });
};
exports.handleHttp = handleHttp;
