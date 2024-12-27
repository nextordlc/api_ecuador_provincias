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
exports.getParishesById = exports.getParishes = void 0;
const error_handle_1 = require("../utils/error.handle");
const parishes_service_1 = require("../services/parishes.service");
const getParishes = (_req, res) => {
    try {
        (0, error_handle_1.serviceNotImplemented)(res);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_PARISHES');
    }
};
exports.getParishes = getParishes;
const getParishesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (id === undefined) {
            (0, error_handle_1.badRequest)(res);
        }
        const resp = yield parishes_service_1.parishesService.getListParishesById(id);
        if (resp == null) {
            res.status(404).json({ message: `No se encontró el cantón específicado: ${id}` });
        }
        else {
            res.json(resp);
        }
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_PARISHES_BY_ID');
    }
});
exports.getParishesById = getParishesById;
