"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHTTP = exports.errorHandler = void 0;
var fs_1 = __importDefault(require("fs")); //para manejar errores
var path_1 = __importDefault(require("path")); //para direccinoar archivos
/**
 * funcion para manejo de errores
 * @param err dato tipo error para manejar statuscode
 * @param req requiere (obtiene) la ruta original del url
 * @param res responde con el estatus del error
 * @param _next en esta funcion no se usa next por ello esta tipeada con guin bajo (_next)
 * @fs appendFile: agrega el error capturado a un archivo creado en tiempo de ejecucion llamado error.log
 */
var errorHandler = function (err, req, res, _next) {
    if (err.statusCode < 500) {
        res.sendStatus(err.statusCode);
    }
    else {
        res.sendStatus(500);
        fs_1.default.appendFile(path_1.default.resolve(__dirname, 'error.log'), "\n        ##################\n        " + req.originalUrl + "\n        " + new Date().toLocaleDateString() + "\n        " + err.toString() + "\n        ", function (err) {
            if (err)
                console.log(err);
        });
    }
};
exports.errorHandler = errorHandler;
/**
 * Clase error htpp con estructura en el constructor
 * @return devuelve el tipo de statusCode mas un mensaje
 */
var ErrorHTTP = /** @class */ (function () {
    function ErrorHTTP(message, statusCode) {
        if (statusCode === void 0) { statusCode = 500; }
        this.message = message;
        this.statusCode = statusCode;
    }
    ErrorHTTP.prototype.toString = function () {
        return this.statusCode + ': ' + this.message;
    };
    return ErrorHTTP;
}());
exports.ErrorHTTP = ErrorHTTP;
