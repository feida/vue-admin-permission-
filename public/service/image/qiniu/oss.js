/**
 * @author wxh on 2018/9/20
 * @copyright
 * @desc
 */
const qiniu = require('qiniu');

const config = require('../../config');

const ACCESS_KEY = config.qiniu.accessKey;
const SECRET_KEY = config.qiniu.secretKey;
const BUCKET = config.qiniu.oss.bucket;

const MAC = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);

exports.getAccessKey = function () {
    return ACCESS_KEY;
};

exports.ossBaseHost = function () {
    return config.qiniu.oss.host;
};


/**
 * @desc 获取上传凭证
 * */
exports.getUploadToken = function (expires) {
    const options = {
        scope: BUCKET,
        expires: expires
    };

    const  putPolicy = new qiniu.rs.PutPolicy(options);
    return putPolicy.uploadToken(MAC);
};

