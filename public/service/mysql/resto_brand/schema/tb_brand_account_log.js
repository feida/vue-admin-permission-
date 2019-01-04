/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_brand_account_log', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    group_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    behavior: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    found_change: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    remain: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    detail: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    account_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    shop_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    serial_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    order_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    is_parent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'tb_brand_account_log'
  });
};
