/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_sync_order_log', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content_order: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_order_item: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_order_payment_item: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    order_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    shop_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    brand_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'tb_sync_order_log'
  });
};
