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
            url: 'mongodb://newpos.docker.restoplus.cn:27017/test',
            password: '',
            db: ''
        },
        admin: {
            url: 'mongodb://newpos.docker.restoplus.cn:27017/backend',
            password: '',
            db: ''
        },
    },

    redis: {
        restoplus: {
            host: 'newpos.docker.restoplus.cn',
            port: 6379,
            password: null,
            db: 0
        }
    },
    /**
     * emq 消息服务配置
     */
    mqtt: {
        restoplus: {
            url: 'mqtt://emq.restoplus.cn',
            subscribeTheme:`node_server/+/+/+/+/+`,
            options:{
                username:`posAdmin`,
                password:`posAdmin`,
                clientId:`posAdmin-pre`,
                keepalive: 10,    // 设置会话心跳时间 60秒，设置0为禁用
                reconnectPeriod: 30 * 1000,    //1000毫秒，两次重新连接之间的间隔
                resubscribe:true,   //如果连接断开并重新连接，则会再次自动订阅已订阅的主题（默认true）
            }
        },
        api:{
            url:`http://test.emq.restoplus.cn/`
        }
    },
};