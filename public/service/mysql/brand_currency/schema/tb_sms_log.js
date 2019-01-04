/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_sms_log', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    phone: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    sms_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    sms_result: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    is_success: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'tb_sms_log'
  });
};
