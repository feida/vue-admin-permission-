/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_queue_qrcode', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    shop_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    sign: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    create_user: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    type: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    tableName: 'tb_queue_qrcode'
  });
};
