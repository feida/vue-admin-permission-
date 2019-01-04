/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_distribution_time', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    begin_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    stop_order_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    tableName: 'tb_distribution_time'
  });
};
