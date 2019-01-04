/**
 * @author wxh on 2018/9/11
 * @copyright
 * @desc
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


//角色===================================================
const RoleSchema = new Schema({
    rname           : {type: String,  required: true},       //角色名，用于显示
    rdesc           : {type: String,  required: true},       //角色描述
    rval            : {type: String,  required: true},       //角色值、用于权限判断
    create_time     : {type: Date,    required: true},       //创建时间
    update_time     : {type: Date,    required: true},       //更新时间

});

RoleSchema.virtual('id', function () {
    return this._id.toString();
});


//权限===================================================
const PermSchema = new Schema({
    pval            : {type: String,  required: true},       //权限值，shiro的权限控制表达式
    parent          : {type: String,  required: false},       //父权限id
    pname           : {type: String,  required: false},       //权限名称
    ptype           : {type: Number,  required: false},       //权限类型：1.菜单 2.按钮 3.接口 4.特殊
    leaf            : {type: Number,  required: false},       //是否叶子节点
    create_time     : {type: Date,    required: true},       //创建时间
    update_time     : {type: Date,    required: true},       //更新时间

});

RoleSchema.virtual('id', function () {
    return this._id.toString();
});


//角色权限关联===================================================
const RolePermSchema = new Schema({
    role_id         : {type: String,  required: true},       //角色id
    perm_val        : {type: String,  required: true},       //权限id
    perm_type       : {type: Number,  required: true},       //权限类型：1.菜单 2.按钮 3.接口 4.特殊
});

exports.RoleSchema = RoleSchema;
exports.PermSchema = PermSchema;
exports.RolePermSchema = RolePermSchema;