"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var main_router_1 = __importDefault(require("../api/main.router"));
var error_handler_1 = require("./error.handler");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(main_router_1.default);
//manejador de errores
app.use(error_handler_1.errorHandler);
exports.default = app;
