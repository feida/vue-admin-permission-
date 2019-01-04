/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brand_queue', {
    id: {
      type: DataTypes.STRING(55),
      allowNull: false,
      primaryKey: true
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    topic_resto_shop: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pid_shop: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cid_shop: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cid_order: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    topic_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    open_task: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'brand_queue'
  });
};
