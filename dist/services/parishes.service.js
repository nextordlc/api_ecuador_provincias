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
exports.parishesService = void 0;
const database_1 = require("../config/database");
const getListParishesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.db.supabase
        .from('parroquias_ecuador')
        .select('id,parroquia,id_canton')
        .eq('id', id)
        .single();
    if (error)
        throw error;
    return data;
});
const getParishesByCantId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.db.supabase
        .from('parroquias_ecuador')
        .select('id,parroquia,id_canton')
        .eq('id_canton', id);
    if (error)
        throw error;
    return data;
});
exports.parishesService = {
    getListParishesById,
    getParishesByCantId
};
