import request from '@/utils/request'
import {URL} from '@/config/index'

export function getShopDetailList(params) {
    return request({url: URL+'/resto/brand/shop/detail/list', method: 'get',params: params})
}

export function getShopOrderListByBrandIdAndShopId(params) {
    return request({url: URL+'/resto/brand/shop/order/list', method: 'get',params: params})
}

export function getBrandShopAll(params) {
    return request({url: URL+'/resto/brand/shop/all', method: 'get',params: params})
}
//获取订单数据
export function getShopOrderDetailsByBrandIdAndOrderId(params) {
    return request({url: URL+'/resto/brand/shop/order/details', method: 'get',params: params})
}

//获取订单支付数据
export function getShopOrderPaymentDetailsByBrandIdAndOrderId(params) {
    return request({url: URL+'/resto/brand/shop/order/payment/details', method: 'get',params: params})
}

//更新订单、支付数据
export function updateShopOrderDetailsByBrandIdAndTableAndId(data) {
    return request({url: URL + '/resto/brand/shop/order/details', method: 'post', data})
}

//新增更新订单、支付数据
export function creatorShopOrderDetailsByBrandIdAndTableAndId(data) {
    return request({url: URL + '/resto/brand/shop/order/details', method: 'put', data})
}

//获取顾客列表
export function getCustomerInfoList(params) {
    return request({url: URL + '/resto/brand/customer/list', method: 'get', params})
}