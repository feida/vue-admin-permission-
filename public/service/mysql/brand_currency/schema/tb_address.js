/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_address', {
    ADDRESS_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    address_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CUSTOMER_ID: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TELEPHONE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROVINCE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MUNICIPALITY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DISTRICT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DETAIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    map_x: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    map_y: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'tb_address'
  });
};
