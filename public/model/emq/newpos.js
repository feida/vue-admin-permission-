/**
 * @author wxh on 2018/10/22
 * @copyright
 * @desc
 */

const newposMqtt = require('../../service/mqtt/newpos').client;

const config = require('../../service/config');

const request = require('request');
const URL = require('url');

if(!config && !config.javaPush && config.javaPush.url){
    throw new Error('please provide javaPush config');
}

/**
 *  @desc newpos消息推送
 * */
exports.newposPush = function (brandId,shopId,group,action,id,content, callback) {
    if(typeof callback != `function`){
        callback = function () {}
    }



    newposMqtt.publish(`newpos/posAdmin/${brandId}/${shopId}/${group}/${action}/${id}`,JSON.stringify(content),{ qos:1,retain: true });
    callback(null,{
        topic:`newpos/posAdmin/${brandId}/${shopId}/${group}/${action}/${id}`,
        content:content
    })
};


/**
 *  @desc java消息推送
 * */
exports.javaNewPosPush = function (brandId,shopId,sql, callback) {
    request({
        method: 'GET',
        header : {'Content-Type' : 'application/json; charset=UTF-8'},
        uri: URL.format({
            protocol: 'http',
            host: `${config.javaPush.url}`,
            pathname: `/${config.javaPush.path}`,
            query: {
                brandId: `${brandId}`,
                shopId: `${shopId}`,
                type: `serverCommand`,
                sql: `${sql}`,
            }
        }),
        json: true,
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(null,body)
        }else {
            console.log(error)
            console.log(response)
            callback(null,{message:`发送 - ${config.javaPush.url}/${config.javaPush.path}?brandId=${brandId}&shopId=${shopId} - 失败`,success:false})
        }
    });



    // request({
    //     header : {'Content-Type' : 'application/json; charset=UTF-8'},
    //     method: "get",
    //     url:`${config.javaPush.url}/${config.javaPush.path}?brandId=${brandId}&shopId=${shopId}&type=serverCommand&sql=${sql}`,
    //
    //     // json: true,
    // }, function(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         callback(null,body)
    //     }else {
    //         console.log(error)
    //         console.log(response)
    //         callback(null,{message:`发送 - ${config.javaPush.url}/${config.javaPush.path}?brandId=${brandId}&shopId=${shopId} - 失败`,success:false})
    //     }
    // });

};