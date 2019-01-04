/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_customer_notice_history', {
    customer_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    notice_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'tb_customer_notice_history'
  });
};
