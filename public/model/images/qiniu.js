/**
 * @author wxh on 2018/9/20
 * @copyright
 * @desc
 */


const qiniuOssService = require('../../service/image/qiniu/oss');
const redisService = require('../../service/redis/restoplus/index').client;

const qiniuOssUploadTokenKey = function (accessKey) {
    return 'qno:' + accessKey;
};

exports.getQiniuOssBaseHost = function () {
    return qiniuOssService.ossBaseHost();
};

/**
 * @desc 获取七牛上传Token
 * */
exports.getQiniuOssUploadToken = function (callback) {
    let expire = 7200;
    let cacheKey = qiniuOssUploadTokenKey(qiniuOssService.getAccessKey());

    redisService.get(cacheKey, function (err, token) {
        if(err){
            return callback(err);
        }

        if(token){
            return callback(null, token);
        }

        let uploadToken = qiniuOssService.getUploadToken(expire - 200);

        callback(null, uploadToken);

        redisService.setex(cacheKey, expire, uploadToken);
    });

};