/**
 * @author wxh on 2018/10/22
 * @copyright
 * @desc
 */

const mqtt = require('mqtt');
const _ = require('lodash');

const config = require('../../config');

if(!config && !config.mqtt && config.mqtt.newpos){
    throw new Error('please provide mongodb config');
}

const MQTT_CONFIG = config.mqtt.newpos;

MQTT_CONFIG.options.clientId = `${MQTT_CONFIG.options.clientId}-${_.random(100, 999)}`;

const MQTT_CLIENT = mqtt.connect(MQTT_CONFIG.url,MQTT_CONFIG.options);

MQTT_CLIENT.on('connect',() =>{
    console.log('mqtt成功连接到：' + MQTT_CONFIG.url);
    MQTT_CLIENT.subscribe(`${MQTT_CONFIG.subscribeTheme}`,(err)=>{
        if (err) {
            console.log(`订阅失败--${MQTT_CONFIG.subscribeTheme}`,`${err.toString()}`)
        }
        console.log(`订阅成功--${MQTT_CONFIG.subscribeTheme}`)

    })
});
MQTT_CLIENT.on('close',  (connack) =>{
    console.log(`==mqtt==close==你已断开连接,${connack?`异常退出`:`正常退出`}`)
});

MQTT_CLIENT.on('reconnect',  () =>{
    console.log("==mqtt==reconnect==正在尝试重新连接")
});

MQTT_CLIENT.on('message',  (topic, message, packet)=> {
    if(message.toString()!=``){
        console.log("====packet=====",packet);
        console.log("====message=====",message.toString());
        MQTT_CLIENT.publish(`${topic}`,``,{ retain: true });
    }
});

exports.client = MQTT_CLIENT;

//
// let mqtt = require('mqtt');
// let lodash = require('lodash');
// let MQTT_URL = ``;
// let client = {
//     url:`mqtt://emq.restoplus.cn`,
//     mqtt:null,
//     mqttOpen:false,
//     subscribeTheme:`node_server/+/+/+/+/+`,
//     options:{
//         username:`posAdmin`,
//         password:`posAdmin`,
//         clientId:`posAdmin-${lodash.random(10000,99999)}`,
//         keepalive: 10,    // 设置会话心跳时间 60秒，设置0为禁用
//         reconnectPeriod: 30 * 1000,    //1000毫秒，两次重新连接之间的间隔
//         resubscribe:true,   //如果连接断开并重新连接，则会再次自动订阅已订阅的主题（默认true）
//     }
// };
// client.mqtt=mqtt.connect(MQTT_URL,options);
// client.mqtt.on('connect',() =>{
//
//     client.subscribe('b6e1477b7aa245c7baebdec81ad3eda6NewPos',  (err)=> {
//         if (err){
//             console.log("====订阅出错")
//         }else {
//             console.log("==subscribe==你已订阅")
//         }
//     });
// });
//
// client.mqtt.on('reconnect',  () =>{
//     console.log("==reconnect==正在尝试重新连接")
// });
//
// client.mqtt.on('error',  (msg) =>{
//     console.log(`收到mqtt错误`,msg.toString())
// });
//
// client.on('close',  (connack) =>{
//     console.log(`==close==你已断开连接,${connack?`异常退出`:`正常退出`}`)
// });
//
// client.on('end',  () =>{
//     console.log("==mqtt退出==")
// });