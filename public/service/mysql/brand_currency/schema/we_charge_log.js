/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('we_charge_log', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shop_id: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    charge_telephone: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    charge_type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    charge_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'we_charge_log'
  });
};
