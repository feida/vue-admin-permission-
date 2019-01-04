/**
 * @author wxh on 2018/12/4
 * @copyright
 * @desc
 */
const order = require('../../controller/newpos/order');

exports.map = function (app) {


    app.put('/newpos/order/info/new', order.createNewposrder);      //创建或修改newpos订单数据

    app.get('/newpos/order/list', order.getOrderListByBrandIdShopId);      //获取订单列表

    app.get('/newpos/pos/order/details',  order.getPosOrderDetailsByOrderId);      //获取pos订单详情
}