"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const cantones_controller_1 = require("../controllers/cantones.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', cantones_controller_1.getCantons);
router.get('/:id', cantones_controller_1.getCantonsById);
router.get('/:id/:value', cantones_controller_1.getParishesByCantonId);
