/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_reward_order_payment', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    reward_order_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    payment_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    payment_value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    payment_data: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'tb_reward_order_payment'
  });
};
