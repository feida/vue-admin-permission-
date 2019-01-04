/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mq_config', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    topic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cid_shop: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_used: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    cid_pos: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mq_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'mq_config'
  });
};
