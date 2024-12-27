"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCountry = void 0;
const checkCountry = (_, res, next) => {
    try {
        next();
    }
    catch (error) {
        res.status(400).send("sorry, this feature is not available for your country");
    }
    ;
};
exports.checkCountry = checkCountry;
