/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */

const sequelize = require('sequelize');

exports.define = function (mysql) {
    if (!mysql.models) {
        mysql.models = {}
    }
    /**
     * @desc 品牌数据库配置表
     * */
    mysql.models.DatabaseConfig = mysql.define('database_config', {
        id                  : {type: sequelize.STRING,    primaryKey: true  },        //id
        name                : {type: sequelize.STRING,   },                         //数据库名称
        url                 : {type: sequelize.STRING,   },                         //数据库URL
        driver_class_name   : {type: sequelize.STRING,   },                         //数据库驱动
        username            : {type: sequelize.STRING,   },                         //数据库用户名
        password            : {type: sequelize.STRING,   },                         //数据库密码
        state               : {type: sequelize.INTEGER,  },                         //数据状态
        create_time         : {type: sequelize.DATE, allowNull: false},
        update_time         : {type: sequelize.DATE, allowNull: false}
    }, {
        freezeTableName: true,
    });

    return mysql;
};