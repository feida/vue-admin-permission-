/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */

const Sequelize = require('sequelize');
const path = require('path');

const config = require('../../config/index');


const BRAND_CURRENCY_CONFIG = config.mysql.brand_currency;
const BRAND_CURRENCY_CLIENT  = function (database) {
    return new Sequelize(database, BRAND_CURRENCY_CONFIG.username, BRAND_CURRENCY_CONFIG.password, {
        host: BRAND_CURRENCY_CONFIG.host,
        port: BRAND_CURRENCY_CONFIG.port,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        logging: console.log,
        queueLimit: 0,
        waitForConnection: true,
        dialectOptions: {
            charset: 'utf8'
        },
        timezone:'+08:00',
        define: {
            freezeTableName: true,
            timestamps: false
        }
    });
};

// const PUBLIC_CLIENT = new Sequelize(PUBLIC_CONFIG.database, PUBLIC_CONFIG.username, PUBLIC_CONFIG.password, {
//     host: PUBLIC_CONFIG.host,
//     port: PUBLIC_CONFIG.port,
//     dialect: 'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },
//     logging: console.log,
//     queueLimit: 0,
//     waitForConnection: true,
//     dialectOptions: {
//         charset: 'utf8'
//     },
//     timezone:'+08:00',
//     define: {
//         freezeTableName: true,
//         timestamps: false
//     }
// });

exports.client = BRAND_CURRENCY_CLIENT;
exports.Sequelize = BRAND_CURRENCY_CONFIG;
exports.BRAND_CURRENCY_CLIENT = BRAND_CURRENCY_CLIENT;

