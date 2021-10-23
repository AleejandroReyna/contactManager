import mongoose from "mongoose";

//conectando a base de datos
export const usersConnection = mongoose.createConnection(
    process.env.DB_URL_USER ||'mongodb://localhost/db_users');


