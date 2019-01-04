/**
 * @author wxh on 2018/12/26
 * @copyright
 * @desc
 */
const brand_currency_mysql_client = require('../../service/mysql/brand_currency').client;

/**
 *`所有tb_customer 信息
 * @param database
 * @param where
 * @param pageSkip
 * @param pageSize
 * @param callback
 */
exports.getAllCustomerInfo = function (database,where,pageSkip,pageSize, callback) {

    let brand_currency_mysql = new brand_currency_mysql_client(database);

    const tb_customer_model = brand_currency_mysql.import('../../service/mysql/brand_currency/schema/tb_customer.js');

    tb_customer_model.findAndCountAll({
        where,
        'limit': pageSize,
        'offset': pageSkip,
    }).then(function (result) {
        callback(null, result);
    }).catch(function (err) {
        callback(err);
    });

};