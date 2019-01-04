/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */

const Sequelize = require('sequelize');

exports.define = function (mysql) {
    if (!mysql.models) {
        mysql.models = {}
    }
    /**
     * @desc 区域表
     * */
    mysql.models.TbTest = mysql.define('tb_test', {
        id              : {type: Sequelize.STRING,    primaryKey: true  },        //id
        userName        : {type: Sequelize.STRING,   },                           //用户名
    }, {
        freezeTableName: true, //默认为false，当为false时，如果你数据库中已有表a的话，sequelize会修改你的表名，后缀加个s
        timestamps:true   //默认为true，它会为你的表添加两个额外的字段“createdAt”、"updatedAt"。
    });

    return mysql;
};