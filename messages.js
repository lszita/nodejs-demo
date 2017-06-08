'use strict';
const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'demo_user',
    password: 'demo1234*',
    database: 'node_demo'
});

module.exports.getAll = (cb) => {
    pool.query('SELECT * FROM node_demo.messages', (error, results) => {
        if (error) {
            console.log(error);
            return cb(error, null);
        }
        return cb(null, results);
    });
};

module.exports.getById = (id, cb) => {
    pool.query('SELECT * FROM node_demo.messages WHERE id=?', id, (error, results) => {
        if (error) {
            console.log(error);
            return cb(error, null);
        }
        cb(null, results);
    });
};

module.exports.create = (message, cb) => {
    pool.query('INSERT INTO node_demo.messages(message) value(?)', message, (error, results) => {
        if (error) {
            console.log(error);
            return cb(error, null);
        }
        cb(null, { "id": results.insertId, "message": message });
    });
};


module.exports.delete = (id, cb) => {
    pool.query('DELETE FROM node_demo.messages where id=?', Number(id), (error, results) => {
        if (error) {
            console.log(error);
            return cb(error, null);
        }
        cb(null, "");
    });
};

module.exports.update = (id, message, cb) => {
    pool.query('UPDATE node_demo.messages set message = ? where id=?', [message, Number(id)], (error, results) => {
        if (error) {
            console.log(error);
            return cb(error, null);
        }
        cb(null,{ id: Number(id), message: message });
    });
};