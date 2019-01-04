/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_off_line_order', {
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    resource: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    enter_total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    enter_count: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    num_guest: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    delivery_orders: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    order_books: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    membership_order: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    meituan_order_count: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    meituan_order_total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    baidu_order_count: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    baidu_order_total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    wechat_payment_total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ali_payment_total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cash_receipt_total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    unionpay_payment_total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    specific_consumer_card: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    offline_marketing_discount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    create_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'tb_off_line_order'
  });
};
