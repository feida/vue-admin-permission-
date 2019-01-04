/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_red_packet', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    red_money: {
      type: DataTypes.DECIMAL,
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
    red_remainder_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    red_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    order_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'tb_red_packet'
  });
};
