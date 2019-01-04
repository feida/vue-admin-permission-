/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */


module.exports = function () {
    return function (req, res, next) {
        let start = Date.now();
        let end = res.end;

        res.end = function () {
            logger.info(req.method, req.path, Date.now() - start, new Date());
            end.apply(res, arguments);
        };

        next();
    };
};