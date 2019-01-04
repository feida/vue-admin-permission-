/**
 * @author wxh on 2018/8/19
 * @copyright
 * @desc
 */
const uuid = require('uuid/v4');
const async = require('async');
const moment = require('moment');

const adminModel = require('../../public/model/admin/administrator');
const recordModel = require('../../public/model/admin/record');
/**
 * 后台用户登录
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.login = function (req, res, next) {

    let username = req.body.username;
    let password = req.body.password;

    if (!username) return next(new BadRequestError('username is null'));

    if (!password) return next(new BadRequestError('password is null'));

    adminModel.getAdminUser(username, password, function (err, user) {
        if (err)   return next(err);

        if (!user) {
            return res.json({
                flag: '0000',
                msg: '',
                result: {
                    ok: false,
                    message: '登录失败',
                }
            });
        }

        if (user.status == 0) {
            return res.json({
                flag: '0000',
                msg: '',
                result: {
                    ok: false,
                    message: '您的账户已经被锁定',
                }
            });
        }

        let userId = user._id;
        let token = uuid();
        let expire = `${moment().add(30,'days').format('YYYY-MM-DD HH:mm:ss')}`;    //有效期为30天

        async.parallel({
            updateLoginToken: function(cb) {
                if(user.web_sso){   //单点登陆
                    adminModel.updateLoginToken(userId, token, expire, cb);
                }else {
                    if(user.login_token && user.login_token.expire > new Date()){
                        token = user.login_token.token;
                        cb()
                    }else {
                        adminModel.updateLoginToken(userId, token, expire, cb);
                    }
                }
            }
        }, function (err, results) {
            if(err)  return next(err);
            user.action = `登陆`;
            recordModel.createAdministratorRecord(user);
            res.json({
                flag: '0000',
                msg: '',
                result: {
                    ok: true,
                    message: '',
                    token: token,
                    avatar: user.admin_avatar || '',
                    user_name: user.admin_name,
                    name: user.full_name,
                    roles: user.admin_roles,
                    introduction: user.admin_introduction ||`我是后台用户`
                }
            });
        });

    });
};


/*
 * @desc 退出登录
 * */
exports.logout = function (req,res,next) {

    return res.json({
        flag: '0000',
        msg: '',
        result: {
            ok: true,
            message: '退出成功！',
        }
    })
};