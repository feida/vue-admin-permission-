/**
 * @author wxh on 2017/11/20
 * @copyright
 * @desc
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

//测试===================================================
const TestSchema = new Schema({
    status          : {type: Number, required: true},
    title           : {type: String, required: true},
    // admin_name    : {type: String,  required: true},       //用户名
    // admin_password: {type: String,  required: true},       //用户密码
    // full_name     : {type: String,  required: true},       //全名
    // password_salt : {type: String,  required: true},       //密码盐
    // create_time   : {type: Date,    required: true},       //创建时间
    // update_time   : {type: Date,    required: true},       //更新时间
    //
    // admin_gender  : {type: Boolean, required: false},       //用户性别
    // admin_mobile  : {type: String,  required: false},       //用户手机
    // admin_age     : {type: Number,  required: false},       //用户年龄
    // admin_profile : {type: String,  required: false},       //用户简介
    // admin_avatar  : {type: String,  required: false},       //用户头像
    // admin_authority: {type: String,  required: false},      //用户权限
});

// TestSchema.virtual('id', function () {
//     return this._id.toString();
// });

TestSchema.index({admin_name : 1, unique: true});

TestSchema.virtual('id').get(function () {
    return this._id.toString();
});


TestSchema.index({create_time : 1});


//状态
TestSchema.statics.STATUS = {
    DELETED : 0,
    DISPLAY : 1,
    PUSHING : 2,
    PUSHED  : 3,
    HIDDEN  : -1,
};

exports.TestSchema = TestSchema;
