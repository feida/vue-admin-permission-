/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_account_log', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    money: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    payment_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    remain: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    source: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    freeze_return_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    order_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'tb_account_log'
  });
};
