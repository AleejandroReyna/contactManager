import mongoose from "mongoose";
require('dotenv').config();

require('dotenv').config();

//conectando a base de datos
export const usersConnection = mongoose.createConnection(
    process.env.DB_URL_USER ||'mongodb://localhost/db_users');


