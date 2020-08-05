'use strict';

const { INTEGER } = require("sequelize/types");


module.exports = (sequelize, Datatypes) => {
    return sequelize.define('user', {
        id: {
            type: INTEGER,
            primaryKey: true
        },
        fname: {
            type: String,
            required: true,
            allowNull: true
        },
        lname: {
            type: String,
            required: true,
            allowNull: true
        },
        username: {
            type: String,
            required: true,
            allowNull: true,
            len: [8, 13]
        },
        password: {
            type: String,
            required: true,
            allowNull: true,
            len: [8, 13]
        },
        email{
            type: String,
            required: true,
            allowNull: true,
            len: [7, 30]
        }

    })
}