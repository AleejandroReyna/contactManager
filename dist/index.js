"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./services/server"));
require('dotenv').config();
server_1.default.listen(process.env.PORT || 3000, function () {
    console.log('server is listen on port localhost: 3000');
});
