/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */

const Sequelize = require('sequelize');
const path = require('path');

const config = require('../../config/index');


const TEST_CONFIG = config.mysql.test;

const TEST_CLIENT = new Sequelize(TEST_CONFIG.database, TEST_CONFIG.username, TEST_CONFIG.password, {
    host: TEST_CONFIG.host,
    port: TEST_CONFIG.port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: false,
    queueLimit: 0,
    waitForConnection: true,
    dialectOptions: {
        charset: 'utf8'
    },
    timezone:'+08:00'
});


const test                  = require('./schema/test');

let s1  = test.define(TEST_CLIENT);


exports.client = TEST_CLIENT;
exports.Sequelize = TEST_CLIENT;

if(process.env.INIT_SQLITE === 'yes') {

    var UUID = require('uuid');
    var ID = UUID.v1();
    TEST_CLIENT.sync({force: true})
        .then(() => s1.model('tb_test').create({
            id: ID,
            userName: 'janemysql'
        }))
        .then(jane => {
            console.log(jane.toJSON());
        });
}

exports.init = function () {

    if(process.env.INIT_SQLITE === 'yes'){

        TEST_CLIENT.sync({force: true}).then(function (err) {
            if(err){
                return console.error(err);
            }
            console.log('init sqlite success');
        });
    }
};