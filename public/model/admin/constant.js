/**
 * @author wxh on 2018/12/7
 * @copyright
 * @desc
 */

const async = require('async');
const adminMongodb = require('../../service/mongodb/admin').client;

const Constant = adminMongodb.model('Constant');

/**
 *  @desc 获取常量
 * */
exports.constantList = function (condition, callback) {
    Constant.find(condition, callback);
};