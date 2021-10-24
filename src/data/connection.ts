import mongoose from "mongoose";


//conectando a base de datos
export const contactsConnection = mongoose.createConnection(
    process.env.DB_URL_CONTACTS ||'mongodb://localhost/db_contacts');


