/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('we_return_customer', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shop_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    telephone: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    tableName: 'we_return_customer'
  });
};
