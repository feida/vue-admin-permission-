/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_bonus_log', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    charge_order_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    bonus_setting_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    bonus_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    shopowner_bonus_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    employee_bonus_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    shopowner_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    employee_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    wishing: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shopowner_issuing_state: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    employee_issuing_state: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    amount_disbursed: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    employee_amount_disbursed: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    shopowner_amount_disbursed: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'tb_bonus_log'
  });
};
