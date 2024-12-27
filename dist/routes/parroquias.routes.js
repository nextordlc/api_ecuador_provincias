"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const parroquias_controller_1 = require("../controllers/parroquias.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', parroquias_controller_1.getParishes);
router.get('/:id', parroquias_controller_1.getParishesById);
