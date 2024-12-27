"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParishesByCantonId = exports.getCantonsById = exports.getCantons = void 0;
const error_handle_1 = require("../utils/error.handle");
const cantons_service_1 = require("../services/cantons.service");
const parishes_service_1 = require("../services/parishes.service");
const getCantons = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, error_handle_1.serviceNotImplemented)(res);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_CANTONS');
    }
});
exports.getCantons = getCantons;
const getCantonsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (id === undefined) {
            (0, error_handle_1.badRequest)(res);
        }
        const resp = yield cantons_service_1.cantonService.getListCantonsById(id);
        if (resp == null) {
            res.status(404).json({ message: `No se encontró el cantón específicado: ${id}` });
        }
        else {
            res.json(resp);
        }
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_CANTONS_BY_ID');
    }
});
exports.getCantonsById = getCantonsById;
const getParishesByCantonId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { value } = req.params;
        if (id === undefined ||
            value === undefined) {
            (0, error_handle_1.badRequest)(res);
        }
        if (value !== "parroquias") {
            res.status(404).json({ message: "Para consultar la lista de parroquias de un cantón despúes del código del cantón ingrese '/parroquias/'" });
        }
        else {
            const resp = yield parishes_service_1.parishesService.getParishesByCantId(id);
            if (resp == null) {
                res.status(404).json({ message: `No se encontraron resultados para el código de esta provincia: ${id}` });
            }
            else {
                res.json(resp);
            }
        }
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_PARISHES_BY_CANTON');
    }
});
exports.getParishesByCantonId = getParishesByCantonId;
