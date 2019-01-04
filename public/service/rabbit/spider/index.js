/**
 * @author wxh on 2018/11/26
 * @copyright
 * @desc
 */

const url = require('url');

const queues = require('./queue/url');
const Connection = require('../lib/index').Connection;
const config = require('../../config');

if(!config && !config.amqp && config.amqp.spider){
    throw new Error('please provide amqp config');
}

const SPIDER_CONFIG = config.amqp.spider;

const SPIDER_CLIENT = new Connection(SPIDER_CONFIG.host, SPIDER_CONFIG.port, SPIDER_CONFIG.user, SPIDER_CONFIG.pass);

exports.client = SPIDER_CLIENT;
exports.queues = queues;