/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_get_number', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    eat_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pass_number_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    person_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    wait_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    table_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    call_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    flow_money: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    call_number_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    final_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    high_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    code_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    code_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    tableName: 'tb_get_number'
  });
};
