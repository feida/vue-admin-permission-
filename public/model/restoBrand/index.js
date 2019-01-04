/**
 * @author wxh on 2018/9/25
 * @copyright
 * @desc
 */

const resto_brand_mysql = require('../../service/mysql/resto_brand').RESTO_BRAND_CLIENT;

const shop_detail_model = resto_brand_mysql.import('../../service/mysql/resto_brand/schema/shop_detail.js');
/**
 * @param sql
 * @param callback
 */
exports.getAllCustomSqlInfo = function (sql, callback) {
    if (typeof callback != 'function') {
        callback = function () { };
    }
    resto_brand_mysql.query(`${sql}`,
        { type: resto_brand_mysql.QueryTypes.SELECT }
    ).then(function (results) {
        return callback(null, results);
    }).catch(function (err) {
        return callback(err);
    });
};

exports.getOneCustomSqlInfo = function (sql, callback) {
    if (typeof callback != 'function') {
        callback = function () { };
    }
    resto_brand_mysql.query(`${sql}`,
        { type: resto_brand_mysql.QueryTypes.SELECT }
    ).then(function (results) {
        return callback(null, results ? results[0] : null);
    }).catch(function (err) {
        return callback(err);
    });
};

exports.getBrandMysqlDatabaseInfoByBrandId = function (brandId, callback) {
    let sql = `SELECT d.* from brand  b left join database_config d on d.id = b.database_config_id where b.id = '${brandId}'`;
    resto_brand_mysql.query(`${sql}`,
        { type: resto_brand_mysql.QueryTypes.SELECT }
    ).then(function (results) {
        return callback(null, results ? results[0] : null);
    }).catch(function (err) {
        return callback(err);
    });
};


