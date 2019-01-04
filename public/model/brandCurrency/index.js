/**
 * @author wxh on 2018/10/24
 * @copyright
 * @desc
 */

const brand_currency_mysql_client = require('../../service/mysql/brand_currency').client;


const resto_brand_mysql = require('../../service/mysql/resto_brand').RESTO_BRAND_CLIENT;

const shop_detail_model = resto_brand_mysql.import('../../service/mysql/resto_brand/schema/shop_detail.js');

/**
 *
 * @param database
 * @param sql
 * @param callback
 */
exports.getAllCustomSqlInfo = function (database, sql, callback) {

    let brand_currency_mysql = new brand_currency_mysql_client(database);

    if (typeof callback != 'function') {
        callback = function () { };
    }
    brand_currency_mysql.query(`${sql}`,
        { type: brand_currency_mysql.QueryTypes.SELECT }
    ).then(function (results) {
        return callback(null, results);
    }).catch(function (err) {

        return callback(err);
    });
};

/**
 *
 * @param database
 * @param sql
 * @param callback
 */
exports.getOneCustomSqlInfo = function (database,sql, callback) {
    if (typeof callback != 'function') {
        callback = function () { };
    }
    let brand_currency_mysql = new brand_currency_mysql_client(database);

    brand_currency_mysql.query(`${sql}`,
        { type: brand_currency_mysql.QueryTypes.SELECT }
    ).then(function (results) {
        return callback(null, results ? results[0] : null);
    }).catch(function (err) {
        return callback(err);
    });
};


/**
 *`所有tb_article 信息
 * @param database
 * @param where
 * @param pageSkip
 * @param pageSize
 * @param callback
 */
exports.getAllArticleInfo = function (database,where,pageSkip,pageSize, callback) {

    let brand_currency_mysql = new brand_currency_mysql_client(database);

    const tb_article_model = brand_currency_mysql.import('../../service/mysql/brand_currency/schema/tb_article.js');

    tb_article_model.findAndCountAll({
        where,
        'limit': pageSize,
        'offset': pageSkip,
    }).then(function (result) {
        callback(null, result);
    }).catch(function (err) {
        callback(err);
    });

};

/**
 *`所有订单信息
 * @param database
 * @param where
 * @param pageSkip
 * @param pageSize
 * @param callback
 */
exports.getAllOrderInfo = function (database,where,pageSkip,pageSize, callback) {

    let brand_currency_mysql = new brand_currency_mysql_client(database);

    const tb_model = brand_currency_mysql.import('../../service/mysql/brand_currency/schema/tb_order.js');

    tb_model.findAndCountAll({
        where,
        'limit': pageSize,
        'offset': pageSkip,
        order:[[`create_time`,`desc`]]
    }).then(function (result) {
        callback(null, result);
    }).catch(function (err) {
        callback(err);
    });

};

/**
 *`获取主子订单信息
 * @param database
 * @param where
 * @param callback
 */
exports.getOrderInfo = function (database,where,callback) {

    let brand_currency_mysql = new brand_currency_mysql_client(database);

    const tb_article_model = brand_currency_mysql.import('../../service/mysql/brand_currency/schema/tb_order.js');

    tb_article_model.findAll({
        where,
        order:[[`create_time`,`asc`]]
    }).then(function (result) {
        callback(null, result);
    }).catch(function (err) {
        callback(err);
    });
};

/**
 *`获取主子支付信息
 * @param database
 * @param where
 * @param callback
 */
exports.getOrderPaymentInfo = function (database,where,callback) {

    let brand_currency_mysql = new brand_currency_mysql_client(database);

    const tb_model = brand_currency_mysql.import('../../service/mysql/brand_currency/schema/tb_order_payment_item.js');

    tb_model.findAll({
        where,
        order:[[`pay_time`,`desc`]]
    }).then(function (result) {
        callback(null, result);
    }).catch(function (err) {
        callback(err);
    });
};

/**
 *`获取主子菜品信息
 * @param database
 * @param where
 * @param callback
 */
exports.getOrderArticleInfo = function (database,where,callback) {

    let brand_currency_mysql = new brand_currency_mysql_client(database);

    const tb_model = brand_currency_mysql.import('../../service/mysql/brand_currency/schema/tb_order_item.js');

    tb_model.findAll({
        where
    }).then(function (result) {
        callback(null, result);
    }).catch(function (err) {
        callback(err);
    });
};

/**
 * 自定义获取表内容信息
 * @param database
 * @param table
 * @param id
 * @param callback
 */
exports.getTableInfoByInfo = function (database,table,id,callback) {

    let brand_currency_mysql = new brand_currency_mysql_client(database);

    const tb_model = brand_currency_mysql.import(`../../service/mysql/brand_currency/schema/${table}.js`);
    tb_model.findOne({where: {id: id}}).then(function (result) {
        callback(null, result);
    }).catch(function (err) {
        callback(err);
    });
};


/**
 * 自定义修改表内容信息
 * @param database
 * @param table
 * @param content
 * @param callback
 */
exports.upsertTableInfo = function (database,table,content,callback) {

    let brand_currency_mysql = new brand_currency_mysql_client(database);

    const tb_model = brand_currency_mysql.import(`../../service/mysql/brand_currency/schema/${table}.js`);
    tb_model.upsert(content).then(function (result) {
        callback(null, result);
    }).catch(function (err) {
        callback(err);
    });
};