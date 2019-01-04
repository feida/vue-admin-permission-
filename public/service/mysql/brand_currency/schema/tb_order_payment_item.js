/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_order_payment_item', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    result_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pay_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    pay_value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_mode_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    order_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    is_use_bonus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    to_pay_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    coupon_article_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    tableName: 'tb_order_payment_item'
  });
};
