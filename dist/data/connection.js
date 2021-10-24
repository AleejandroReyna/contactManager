"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsConnection = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
//conectando a base de datos
exports.contactsConnection = mongoose_1.default.createConnection(process.env.DB_URL_CONTACTS || 'mongodb://localhost/db_contacts');
