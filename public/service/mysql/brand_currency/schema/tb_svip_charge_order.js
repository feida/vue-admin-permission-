/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_svip_charge_order', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    charge_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    order_state: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    finish_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    activity_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    svip_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    tableName: 'tb_svip_charge_order'
  });
};
