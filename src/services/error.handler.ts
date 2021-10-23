import express from 'express';
import fs from 'fs'; //para manejar errores
import path from 'path'; //para direccinoar archivos

/**
 * funcion para manejo de errores
 * @param err dato tipo error para manejar statuscode 
 * @param req requiere (obtiene) la ruta original del url
 * @param res responde con el estatus del error
 * @param _next en esta funcion no se usa next por ello esta tipeada con guin bajo (_next)
 * @fs appendFile: agrega el error capturado a un archivo creado en tiempo de ejecucion llamado error.log
 */
export let errorHandler : express.ErrorRequestHandler = (err,req,res,_next) =>{
    if(err.statusCode < 500){
        res.sendStatus(err.statusCode);
    }else{
        res.sendStatus(500);
        fs.appendFile(path.resolve(__dirname, 'error.log'),`
        ##################
        ${ req.originalUrl }
        ${ new Date().toLocaleDateString() }
        ${ err.toString() }
        `, (err) => {
           if(err) console.log(err);
        })
    }
}

/**
 * Clase error htpp con estructura en el constructor
 * @return devuelve el tipo de statusCode mas un mensaje
 */
export class ErrorHTTP{
    statusCode: number;
    message: string;
    constructor(message: string,statusCode:number = 500){
        this.message = message;
        this.statusCode = statusCode;
    }

    toString(){
        return this.statusCode + ': ' + this.message;
    }
}