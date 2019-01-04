/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_order_time', {
    TB_ORDER_TIME_ID: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      primaryKey: true
    },
    BEGIN_TIME: {
      type: DataTypes.TIME,
      allowNull: false
    },
    END_TIME: {
      type: DataTypes.TIME,
      allowNull: false
    },
    REMARK: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tb_order_time'
  });
};
