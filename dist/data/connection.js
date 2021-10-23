"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersConnection = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
//conectando a base de datos
exports.usersConnection = mongoose_1.default.createConnection(process.env.DB_URL_USER || 'mongodb://localhost/db_users');
