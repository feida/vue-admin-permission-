/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_delivery_point', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    province: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    district: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    detail: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    map_x: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    map_y: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    emp_phone: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    emp_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    tableName: 'tb_delivery_point'
  });
};
