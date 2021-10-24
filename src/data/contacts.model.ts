import { Schema } from 'mongoose';

import { contactsConnection } from './connection';

const contactsSchema = new Schema({
    name: String,
    lastName: String,
    email:{
        type:String,
        validate:{
            validator: function (email:string) {
                return /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
            },
            message: (props: string) =>
                `${props.valueOf} is not a valid e-mail address `,
      
        },
    },
    phone: {
        type: String,
        validate: {
            validator: function (phone: string) {
                return /\d{3}-\d{3}-\d{4}/.test(phone);
            },
            message: (props: string) =>
                `${props.valueOf} is not a valid phone number`,
        },
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

//handler devuelve modelo
export const contacts = contactsConnection.model('contacts', contactsSchema);
