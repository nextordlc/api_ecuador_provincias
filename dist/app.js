"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const index_routes_1 = require("./routes/index.routes");
const database_1 = require("./config/database");
(0, dotenv_1.config)();
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    methods: ['OPTIONS', 'GET']
}));
app.use((0, morgan_1.default)('dev'));
database_1.db.supabase;
app.use(index_routes_1.router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
