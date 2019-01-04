/**
 * @author wxh on 2018/11/26
 * @copyright
 * @desc
 */
var StingUtil = module.exports;

StingUtil.bigHump = function (sting) {
    var arr=sting.split("_");
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
    }
    return arr.join("");
};

StingUtil.smallHump = function (sting) {
    var strArr=sting.split('_');
    for(var i=1;i<strArr.length;i++){
        strArr[i]=strArr[i].charAt(0).toUpperCase()+strArr[i].substring(1);
    }
    return strArr.join('');
};