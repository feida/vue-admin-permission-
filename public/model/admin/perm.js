/**
 * @author wxh on 2018/9/11
 * @copyright
 * @desc
 */

const async = require('async');


const adminMongodb = require('../../service/mongodb/admin').client;

const Perm = adminMongodb.model('Perm');
const RolePerm = adminMongodb.model('RolePerm');


/**
 *  @desc 创建权限
 * */
exports.createNewPerm = function (perm, callback) {

    // 验证权限是否重复
    let condition = {
        pval: {$exists: true, $eq: perm.pval}
    };
    Perm.findOne(condition, function (err, pval) {
        if (err) {
            return callback(err);
        }

        if (pval) {
            return callback(new BadRequestError('此权限已存在！'));
        } else {
            let doc = {
                pval: perm.pval,
                parent: perm.parent,
                pname: perm.pname,
                ptype: perm.ptype,
                leaf: perm.leaf,
                create_time: new Date(),
                update_time: new Date()
            };

            Perm.create(doc, function (err, permInfo) {
                if (err)  {
                    return callback(err);
                }

                if (!permInfo) {
                    return callback(null, null);
                }

                return callback(null, permInfo.pval);
            });
        }
    });
};

/**
 *  @desc 获取权限列表
 * */
exports.getPermList = function (condition,callback) {
    Perm.find(condition).sort('_id').exec(callback);
};

/**
 *  @desc 获取权限记录
 * */
exports.getPermByPval = function (condition,callback) {
    Perm.findOne(condition,callback);
};


/**
 *  @desc  自定义条件删除权限数据
 * */
exports.removePermsByCondition = function (condition,callback) {
    Perm.remove(condition, callback);
};

/**
 *  @desc  创建权限配置
 * */
exports.savePerm = function (content,callback) {
    var monInsert = new Perm(content);
    monInsert.save(callback);
};


/**
 *  @desc  修改权限
 * */
exports.updatePerm = function (condition,update,callback) {
    Perm.findOneAndUpdate(condition, update, callback);
};


