/**
 * @author wxh on 2018/8/19
 * @copyright
 * @desc
 */

const async = require('async');


const adminMongodb = require('../../service/mongodb/admin').client;
const restoPlusRedis = require('../../service/redis/restoplus').client;

const Administrator = adminMongodb.model('Administrator');


/**
 *  @desc 创建管理员
 * */
exports.createNewAdministrator = function (administrator, callback) {
    // 验证用户名是否重复
    let condition = {
        admin_name: {$exists: true, $eq: administrator.admin_name}
    };
    Administrator.findOne(condition, function (err, user) {
        if (err) {
            return callback(err);
        }

        if (user) {
            return callback(new BadRequestError('此用户名已存在！'));
        } else {

            let salt = Math.random().toString();

            let administratorDoc = {
                status: Administrator.STATUS.ENABLE,
                admin_name: administrator.admin_name,
                full_name: administrator.full_name,
                admin_password: Administrator.hashPassword(salt, administrator.admin_password),
                password_salt: salt,

                admin_gender: administrator.admin_gender,
                admin_mobile: administrator.admin_mobile,
                admin_age: administrator.admin_age,
                web_sso: administrator.web_sso||Administrator.SSO.MANY,
                admin_avatar: administrator.admin_avatar,
                admin_roles: administrator.admin_roles,
                admin_introduction: administrator.admin_introduction,
                create_time: new Date(),
                update_time: new Date()
            };

            Administrator.create(administratorDoc, function (err, admin) {
                if (err)  {
                    return callback(err);
                }

                if (!admin) {
                    return callback(null, null);
                }

                return callback(null, admin._id);
            });
        }
    });
};


/*
 * @desc 管理员登录
 * */
exports.getAdminUser = function (userName, password, callback) {
    let condition = {
        admin_name: {$exists: true, $eq: userName}
    };

    Administrator.findOne(condition, function (err, user) {
        if (err)  {
            return callback(err);
        }

        if (!user)  {
            return callback(null, null);
        }

        let salt = user.password_salt;
        let realPassword = user.admin_password;
        let enPassword = Administrator.hashPassword(salt, password);

        if (realPassword !== enPassword) {
            return callback(null, null);
        }

        callback(err, user);
    });
};
/*
 * @desc 更新token
 * */
exports.updateLoginToken = function (userID, token, expire, callback) {
    let session = {
        login_token:{
            token: token,
            expire: expire
        }
    };

    let condition = {
        _id: {$exists: true, $eq: userID}
    };

    let update = {
        $set: session
    };
    Administrator.findOneAndUpdate(condition, update, callback);
};
/*
 * @desc 登出
 * */
exports.deleteUserSession = function (token, callback) {
    let cacheTokenKey = Administrator.loginTokenSessionKey(token);

    restoPlusRedis.del(cacheTokenKey, callback);
};

/**
 *  @desc 获取用户session
 * */
exports.getUserSession = function (token, callback) {

    let cacheTokenKey = Administrator.loginTokenSessionKey(token);

    restoPlusRedis.get(cacheTokenKey, function (err, session) {
        if (err) {
            return callback(err);
        }

        if (!session) {
            return callback(null, null)
        }

        let sessionObject;

        try{
            sessionObject = JSON.parse(session)
        }catch (err){
            return callback(err)
        }

        restoPlusRedis.expire(cacheTokenKey, 10 * 60 * 2, function (err, result) {
            callback(err, sessionObject);
        })
    })
};

/**
 *  @desc 更新管理员
 * */
exports.updateAdministrator = function (id,update, callback) {
    Administrator.update({_id:id},{$set:update},{upsert:true},(err)=>{
        if(err) return callback(err);
        callback(null)
    });
};

/**
 *  @desc 根据id获取管理员详情
 * */
exports.getAdministratorDetail = function (administratorId, callback) {
    let condition = {
        _id: administratorId
    };
    Administrator.findOne(condition, callback);
};

/**
 *  @desc 根据token获取管理员详情
 * */
exports.getAdministratorDetailByToken = function (token, callback) {
    let condition = {
        'login_token.token': token,
    };
    Administrator.findOne(condition, callback);
};

/**
 *  @desc 重置密码
 * */
exports.resetPassword = function (name, oldPassword, newPassword, callback) {

    let condition = {
        admin_name: {$exists: true, $eq: name}
    };

    Administrator.findOne(condition, function (err, user) {
        if (err) {
            return callback(err)
        }
        let salt = user.password_salt;
        let realPassword = user.admin_password;
        let enPassword = Administrator.hashPassword(salt, oldPassword);

        if (realPassword !== enPassword) {
            return callback(null, '密码错误');
        }

        let updatePassword = Administrator.hashPassword(salt, newPassword);

        user.admin_password = updatePassword;
        user.login_token = null;
        user.update_time = new Date();
        user.save(function (err) {
            callback(err, user);
        });
    });
};


/**
 *  @desc 获取正常用户总量
 * */
exports.getSystemTotal = function (condition,callback) {
    Administrator.countDocuments(condition, callback);
};

/**
 *  @desc 获取用户列表
 * */
exports.getSystemList = function (condition,pageSkip,pageSize,callback) {
    Administrator.find(condition).sort('-status -_id').skip(pageSkip).limit(pageSize).exec(callback);
};

