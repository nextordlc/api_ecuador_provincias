"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = require("dotenv");
const supabase_js_1 = require("@supabase/supabase-js");
(0, dotenv_1.config)();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
exports.db = {
    supabase
};
