/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_third_customer', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    telephone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true
    },
    money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    },
    remark: {
      type: DataTypes.STRING(3000),
      allowNull: true
    }
  }, {
    tableName: 'tb_third_customer'
  });
};
