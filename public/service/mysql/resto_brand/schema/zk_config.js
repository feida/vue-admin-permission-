/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zk_config', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    zk_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_used: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'zk_config'
  });
};
