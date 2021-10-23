import { Schema } from 'mongoose';

import { usersConnection } from './connection';

const usersSchema = new Schema({
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
    done: {
        type: Boolean,
        default: false,
    },
});

//handler devuelve modelo
export const users = usersConnection.model('users', usersSchema);
