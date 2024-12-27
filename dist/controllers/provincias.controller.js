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
exports.getCantonsByProvinceId = exports.getProvincesById = exports.getProvinces = void 0;
const error_handle_1 = require("../utils/error.handle");
const provinces_service_1 = require("../services/provinces.service");
const cantons_service_1 = require("../services/cantons.service");
const getProvinces = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield provinces_service_1.provinceService.getListProvinces();
        if (resp == null) {
            res.status(404).json({ message: "No se pudo listar las provincias" });
        }
        else {
            res.json(resp);
        }
    }
    catch (error) {
        console.log(error);
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_PROVINCES');
    }
});
exports.getProvinces = getProvinces;
const getProvincesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (id === undefined) {
            (0, error_handle_1.badRequest)(res);
        }
        const resp = yield provinces_service_1.provinceService.getListProvincesById(id);
        if (resp == null) {
            res.status(404).json({ message: `No se encontró la provincia específicada: ${id}` });
        }
        else {
            res.json(resp);
        }
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_PROVINCES_BY_ID');
    }
});
exports.getProvincesById = getProvincesById;
const getCantonsByProvinceId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { value } = req.params;
        if (id === undefined ||
            value === undefined) {
            (0, error_handle_1.badRequest)(res);
        }
        if (value !== "cantones") {
            res.status(404).json({ message: "Para consultar la lista de cantones de una provincia despúes del código de la provincia ingrese '/cantones/'" });
        }
        else {
            const resp = yield cantons_service_1.cantonService.getCantonsByProvId(id);
            if (resp == null) {
                res.status(404).json({ message: `No se encontraron resultados para el código de esta provincia: ${id}` });
            }
            else {
                res.json(resp);
            }
        }
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_CANTONS_BY_PROVINCE');
    }
});
exports.getCantonsByProvinceId = getCantonsByProvinceId;
