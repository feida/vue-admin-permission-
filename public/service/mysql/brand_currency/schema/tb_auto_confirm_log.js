/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_auto_confirm_log', {
    DISTRIBUTION_DATE: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    DISTRIBUTION_TIME_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IS_PRINT: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tb_auto_confirm_log'
  });
};
