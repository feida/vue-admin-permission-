/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_reward_order', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    shop_detailed_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    payment_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    order_state: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    reward_data: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reward_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    use_account: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    payment_money: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    order_money: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'tb_reward_order'
  });
};
