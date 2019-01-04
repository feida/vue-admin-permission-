/**
 * @author wxh on 2018/8/19
 * @copyright
 * @desc
 */

const authorize = require('../../controller/auth/authorize');

exports.map = function (app) {
    app.post('/admin/login', authorize.login);      //登陆
    // app.get('/admin/check', authorize.check);

    app.delete('/admin/logout', authorize.logout);  //退出登陆



};