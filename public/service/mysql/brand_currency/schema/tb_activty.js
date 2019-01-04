/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_activty', {
    ACTIVTY_ID: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    SHOP_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACTIVTY_ON: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ACTIVTY_END: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TIME_ON: {
      type: DataTypes.TIME,
      allowNull: true
    },
    TIME_END: {
      type: DataTypes.TIME,
      allowNull: true
    },
    DISTRIBUTION_MODE_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PRIORITY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RETURN_RATIO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MONEY_CONDITOIN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TRIGGER_CONDITION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACTIVTY_NOTICE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADD_USER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADD_TIME: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'tb_activty'
  });
};
