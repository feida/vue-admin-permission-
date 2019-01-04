/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_property_docking', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    brand_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    shop_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    dictionaries_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    creat_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tb_property_docking'
  });
};
