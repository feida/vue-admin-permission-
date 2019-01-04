/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */

const Sequelize = require('sequelize');
const path = require('path');

const config = require('../../config/index');


const RESTO_BRAND_CONFIG = config.mysql.resto_brand;

const RESTO_BRAND_CLIENT = new Sequelize(RESTO_BRAND_CONFIG.database, RESTO_BRAND_CONFIG.username, RESTO_BRAND_CONFIG.password, {
    host: RESTO_BRAND_CONFIG.host,
    port: RESTO_BRAND_CONFIG.port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: console.log,
    // logging: false,
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


// const account_address_info                  = require('./schema/account_address_info');
// account_address_info(RESTO_BRAND_CONFIG,Sequelize);

// const configInfo                  = require('./schema/configInfo');

// account_address_info.define(RESTO_BRAND_CONFIG);




exports.client = RESTO_BRAND_CONFIG;
exports.Sequelize = RESTO_BRAND_CONFIG;
module.exports = {
    RESTO_BRAND_CLIENT
}
