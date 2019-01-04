/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */

module.exports = {
    mysql: {    //测试数据库
        resto_brand: {
            host: 'rm-uf68wwy6152b6493dho.mysql.rds.aliyuncs.com',
            port: 3306,
            username: 'root',
            password: 'f4xD1YV8DCT5',
            database: 'resto_brand',
        },
        brand_currency: {     //自定义配置database
            host: 'rm-uf68wwy6152b6493dho.mysql.rds.aliyuncs.com',
            port: 3306,
            username: 'root',
            password: 'f4xD1YV8DCT5',
            database: '',
        }
    },
    mongodb: {
        test: {
            url: 'mongodb://106.15.11.6:27017/test',
            password: '',
            db: ''
        },
        admin: {
            url: 'mongodb://106.15.11.6:27017/backend',
            // url: 'mongodb://﻿www.logoxh.cn:27017/backend',
            password: '',
            db: ''
        },
        //爬虫信息数据库
        spider: {
            url: 'mongodb://106.15.11.6:27017/spider',
            password: '',
            db: ''
        },
        //newpos信息数据库
        newpos: {
            url: 'mongodb://106.15.11.6:27017/newpos',
            password: '',
            db: ''
        },
    },

    redis: {
        restoplus: {
            host: '106.15.11.6',
            port: 6379,
            password: null,
            db: 0
        }
    },

    /**
     * 七牛云配置
     * */
    qiniu: {
        accessKey: 'mvjj9lnueTe85lpJhSKqLosI0nUUWNIrBF38-XLj',
        secretKey: 't2-NhHB_GQbqN_RSjC_d_EGmCPYYayoESkd2FwV3',
        oss: {
            bucket: 'cj-newpos',
            host: 'http://qiniu.logoxh.cn'
        }
    },
    /**
     * emq 消息服务配置
     */
    mqtt: {
        newpos: {
            url: 'mqtt://test.emq.restoplus.cn:1883',
            subscribeTheme:`$queue/posAdmin/+/+/+/+/+`,
            options:{
                username:`admin`,
                password:`password`,
                clientId:`posAdmin-dev`,
                keepalive: 10,    // 设置会话心跳时间 60秒，设置0为禁用
                reconnectPeriod: 3000 * 1000,    //1000毫秒，两次重新连接之间的间隔
                resubscribe:true,   //如果连接断开并重新连接，则会再次自动订阅已订阅的主题（默认true）
            }
        },
        api:{
            url:`http://test.emq.restoplus.cn/`,
            Authorization:`Basic YWRtaW46cHVibGlj`
        }
    },

    /**
     * 消息发送配置
     */
    javaPush: {
        url: 'pos.ecosystem.restoplus.cn',
        path:`pos/LocalPosSyncData/serverCommand`,
    },

    /**
     * rabbitmq消息队列服务
     * */
    amqp: {
        //爬虫队列
        spider: {
            host: '106.15.11.6',
            port: 5672,
            user: 'spider',
            pass: 'spider'
        }
    },

};