/**
 * @author wxh on 2018/9/20
 * @copyright
 * @desc
 */

const restoBrand = require('../../controller/restoBrand');

const restoBrandCustomer = require('../../controller/restoBrand/customer');


exports.map = function(app){

    app.get('/resto/brand/shop/all',  restoBrand.getBrandShopAll);    //获取店铺集合根据 brandId

    app.get('/resto/brand/shop/detail/list',  restoBrand.getShopDetailList);    //获取所有店铺列表

    app.get('/resto/brand/shop/order/list',  restoBrand.getShopOrderListByBrandIdAndShopId);      //获取所有店铺订单列表

    app.get('/resto/brand/shop/order/details',  restoBrand.getShopOrderDetailsByBrandIdAndOrderId);      //获取订单详情

    app.post('/resto/brand/shop/order/details',  restoBrand.updateShopOrderDetailsByBrandIdAndTableAndId);      //修改订单、支付数据

    app.put('/resto/brand/shop/order/details',  restoBrand.creatorShopOrderDetailsByBrandIdAndTableAndId);      //新增订单、支付数据

    app.get('/resto/brand/shop/order/payment/details',  restoBrand.getShopOrderPaymentDetailsByBrandIdAndOrderId);      //获取订单支付项详情

    // app.get('/resto/brand/configure/detail/',  restoBrand.getBrandConfigureByBrandId);

    app.get('/resto/brand/shop/article/list',  restoBrand.getArticleInfoListByBrandId);


    app.get('/resto/brand/shop/article/list',  restoBrand.getArticleInfoListByBrandId);




    //--------------------动态品牌切换数据库并查询品牌订单--------------------


    app.get('/resto/brand/customer/list',  restoBrandCustomer.getCustomerInfoList);     //获取微信会员信息


};