/**
 * @author wxh on 2018/12/24
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
 * 根据client 查找订阅
 * @param client
 * @param callback
 */
exports.findSubscriptionByClient = function (client,callback) {
    request({
        headers:{
            'Content-Type' : 'application/json',
            'Authorization':config.mqtt.api.Authorization,
        },
        method: "get",
        url:`${config.mqtt.api.url}api/v3/subscriptions/${client}`,
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(null,body)
        }else {
            callback(error)
        }
    });
};