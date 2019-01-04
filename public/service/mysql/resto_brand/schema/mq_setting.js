/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mq_setting', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'mq_setting'
  });
};
