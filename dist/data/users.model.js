"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
var mongoose_1 = require("mongoose");
var connection_1 = require("./connection");
var usersSchema = new mongoose_1.Schema({
    name: String,
    lastName: String,
    email: {
        type: String,
        validate: {
            validator: function (email) {
                return /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
            },
            message: function (props) {
                return props.valueOf + " is not a valid e-mail address ";
            },
        },
    },
    phone: {
        type: String,
        validate: {
            validator: function (phone) {
                return /\d{3}-\d{3}-\d{4}/.test(phone);
            },
            message: function (props) {
                return props.valueOf + " is not a valid phone number";
            },
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
exports.users = connection_1.usersConnection.model('users', usersSchema);
