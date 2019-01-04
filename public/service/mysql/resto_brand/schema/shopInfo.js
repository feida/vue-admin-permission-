/**
 * @author wxh on 2018/9/21
 * @copyright
 * @desc
 */


const sequelize = require('sequelize');

exports.define = function (mysql) {
    if (!mysql.models) {
        mysql.models = {}
    }
    /**
     * @desc 店铺配置表
     * */
    mysql.models.ShopDetail = mysql.define('shop_detail', {
        id                  : {type: sequelize.STRING,    primaryKey: true  },      //id
        name                : {type: sequelize.STRING,   unique: true},             //店铺名称
        address             : {type: sequelize.STRING,   },                         //店铺地址
        longitude           : {type: sequelize.STRING,   },                         //经度
        latitude            : {type: sequelize.STRING,   },                         //纬度
        phone               : {type: sequelize.STRING,   },                         //纬度

        create_time         : {type: sequelize.DATE, allowNull: false},
        update_time         : {type: sequelize.DATE, allowNull: false}
    }, {
        freezeTableName: true,
    });

    return mysql;
};