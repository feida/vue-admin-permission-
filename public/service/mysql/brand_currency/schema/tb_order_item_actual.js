/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_order_item_actual', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    order_item_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    actual_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'tb_order_item_actual'
  });
};
