/**
 * @author wxh on 2018/8/19
 * @copyright
 * @desc
 */
const mongoose = require('mongoose');
const crypto = require('crypto');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ThirdBindSchema = {
    uid      : {type: String, sparse: true},
    union_id : {type: String, sparse: true},
    name     : {type: String, trim: true}
};

const LoginSchema = {
    token      : {type: String, sparse: true, unique: true},
    expire     : {type: Date}
};

//用户===================================================
const AdministratorSchema = new Schema({
    status        : {type: Number,  required: true},       //用户状态
    admin_name    : {type: String,  required: true},       //登陆名
    admin_password: {type: String,  required: true},       //用户密码
    full_name     : {type: String,  required: true},       //全名
    password_salt : {type: String,  required: true},       //密码盐
    create_time   : {type: Date,    required: true},       //创建时间
    update_time   : {type: Date,    required: true},       //更新时间

    admin_roles   : {type: Array,   required: false},        //用户角色

    admin_gender  : {type: Boolean, required: false},       //用户性别
    admin_mobile  : {type: String,  required: false},       //用户手机
    admin_age     : {type: Number,  required: false},       //用户年龄
    admin_introduction: {type: String,  required: false},   //用户简介
    admin_avatar  : {type: String,  required: false},       //用户头像

    web_sso       : {type: Boolean,  required: false},      //是否启用单点登陆

    bind_tencent_wechat  : ThirdBindSchema,                  //微信绑定
    login_token          : LoginSchema                       //登录信息

});

AdministratorSchema.index({admin_name : 1, unique: true});

AdministratorSchema.virtual('id').get(function () {
    return this._id.toString();
});

//用户状态
AdministratorSchema.statics.STATUS = {
    ENABLE : 1,             //正常
    DISABLE : 0             //锁定
};

//用户性别
AdministratorSchema.statics.GENDER = {
    MALE : true,            //男
    FEMALE : false          //女
};

//单点登陆
AdministratorSchema.statics.SSO = {
    SINGLE : 1,             //单点登陆
    MANY : 0                //可多人登陆
};

AdministratorSchema.statics.hashPassword = function (salt, password) {
    salt = salt ? salt.trim() : '@';
    password = password.trim();
    return crypto.createHash('md5').update(`${salt}&${password}`).digest('hex');
};

AdministratorSchema.statics.loginTokenSessionKey = function (token) {
    return 'ALT:' + token;
};


//后台用户操作记录===================================================
const  AdministratorRecordSchema = new Schema({
    admin_id      : {type: ObjectId, required: true, ref: 'Administrator'},   //用户ID
    admin_action  : {type: String,  required: true},       //用户操作名称
    create_time   : {type: Date,  required: true},         //创建时间
    action_details: {type: Array,  required: false},       //操作详情
    ip_address    : {type: String,  required: false},      //ip地址
});



exports.AdministratorSchema = AdministratorSchema;
exports.AdministratorRecordSchema = AdministratorRecordSchema;