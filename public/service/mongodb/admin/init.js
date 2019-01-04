/**
 * @author wxh on 2017/11/20
 * @copyright
 * @desc
 */

const async = require('async');
const initModel = require('../../../model/admin/init');

const administrator = require('./data/administrator');
const perm = require('./data/perm');
const role = require('./data/role');
const role_perm = require('./data/role_perm');
const payment_constant = require('./data/paymentConstant');
const constant = require('./data/constant');


async.parallel({
    administrator: (done)=>{
        administrator.update_time = new Date();
        administrator.create_time = new Date();
        initModel.removeAdministrator({},()=>{
            initModel.saveAdministrator(administrator,done)
        });
    },
    perm: (done)=>{
        initModel.removePerm({},()=>{
            async.eachLimit(perm, 1, function (item, cb) {
                item.update_time = new Date();
                item.create_time = new Date();
                initModel.savePerm(item,cb)
            },function (err) {
                if(err) return done(err)
                done()
            });

        });
    },
    role: (done)=>{
        initModel.removeRole({},()=>{
            async.eachLimit(role, 1, function (item, cb) {
                item.update_time = new Date();
                item.create_time = new Date();
                initModel.saveRole(item,cb)
            },function (err) {
                if(err) return done(err)
                done()
            });

        });
    },
    role_perm: (done)=>{
        initModel.removeRolePerm({},()=>{
            async.eachLimit(role_perm, 1, function (item, cb) {
                item.update_time = new Date();
                item.create_time = new Date();
                initModel.saveRolePerm(item,cb)
            },function (err) {
                if(err) return done(err);
                done()
            });

        });
    },
    payment_constant: (done)=>{
        initModel.removePaymentConstant({},()=>{
            async.eachLimit(payment_constant, 1, function (item, cb) {
                initModel.savePaymentConstant(item,cb)
            },function (err) {
                if(err) return done(err);
                done()
            });

        });
    },
    constant: (done)=>{
        initModel.removeConstant({},()=>{

            async.eachLimit(constant, 1, function (item, cb) {
                console.log(item)
                initModel.saveConstant(item,cb)
            },function (err) {
                if(err) return done(err);
                done()
            });

        });
    }
},function(error, results){
    if(error){
        console.log(error)
    }
    console.log('数据初始化完毕.');
    process.exit(0);
});

