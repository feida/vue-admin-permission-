/**
 * @author wxh on 2018/9/11
 * @copyright
 * @desc
 */
const async = require('async');


const adminMongodb = require('../../service/mongodb/admin').client;

const Role = adminMongodb.model('Role');
const Perm = adminMongodb.model('Perm');
const RolePerm = adminMongodb.model('RolePerm');



/**
 *  @desc 创建角色
 * */
exports.createNewRole = function (role, callback) {

    // 验证角色是否重复
    let condition = {
        rname: {$exists: true, $eq: role.rname}
    };
    Role.findOne(condition, function (err, rname) {
        if (err) {
            return callback(err);
        }

        if (rname) {
            return callback(new BadRequestError('此角色已存在！'));
        } else {
            let doc = {
                rname: role.rname,
                rdesc: role.rdesc ,
                rval: role.rval ,
                create_time: new Date(),
                update_time: new Date()
            };

            Role.create(doc, function (err, roleInfo) {
                if (err)  {
                    return callback(err);
                }

                if (!roleInfo) {
                    return callback(null, null);
                }

                return callback(null, roleInfo._id);
            });
        }
    });
};

/**
 *  @desc 获取角色总量
 * */
exports.getRoleTotal = function (condition,callback) {
    Role.countDocuments(condition, callback);
};

/**
 *  @desc 获取角色列表
 * */
exports.getRoleList = function (condition,pageSkip,pageSize,callback) {
    Role.find(condition).sort('-_id').skip(pageSkip).limit(pageSize).exec(callback);
};

/**
 *  @desc 根据角色Id获取权限列表
 * */
exports.getPermByRoleIdList = function (condition,callback) {
    let obj = {
        roleArr:[],
        permArr:[]
    };
    async.waterfall([
        function(done){
            Role.findOne({"_id":condition.role_id},(err,result)=>{
                if(err) return done(err);
                if(!result) return done(null,null);
                obj.roleArr.push({
                    id:result._id,
                    name:result.rname,
                    rdesc:result.rdesc,
                    rval:result.rval,
                });
                done(null,result)
            });
        },
        function(result,done){
            if(!result) return done(null,[]);
            RolePerm.find(condition,(err,result)=>{
                if(err) return done(err);
                done(null,result)
            });
        },
        function(result, done){
            if(result.length == 0) return done(null,obj);
            async.eachLimit(result, 1, (item, cb)=> {
                Perm.findOne({pval:item.perm_val},(err,rvle)=>{
                    if(err) return cb(err);
                    if(!rvle) return cb();
                    obj.permArr.push({name:rvle.pname,val:rvle.pval});
                    cb()
                });
            },function (err) {
                done(err,obj)
            });
        },
    ],callback);
};


/**
 *  @desc 根据角色Id获取角色
 * */
exports.getRoleByRoleId = function (condition,callback) {
    Role.findOne(condition,callback);
};

/**
 *  @desc 根据角色条件获取角色名
 * */
exports.getRoleInfo = function (condition,callback) {
    Role.find(condition,callback);
};

/**
 *  @desc  根据角色id查询权限
 * */
exports.getPermsByRoleId = function (condition,callback) {
    RolePerm.find(condition, callback);
};


/**
 *  @desc  根据角色id删除权限配置
 * */
exports.removePermsByRoleId = function (condition,callback) {
    RolePerm.remove(condition, callback);
};

/**
 *  @desc  角色id创建权限配置
 * */
exports.saveRolePerms = function (content,callback) {
    var monInsert = new RolePerm(content);
    monInsert.save(callback);
};

/**
 *  @desc  修改角色信息
 * */
exports.updateRole = function (condition,update,callback) {
    Role.findOneAndUpdate(condition, update, callback);
};

/**
 *  @desc  根据角色id删除角色信息
 * */
exports.removeRoleByRoleId = function (condition,callback) {
    Role.remove(condition, callback);
};

