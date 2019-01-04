/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_virtual_products_kitchen', {
    virtual_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    kitchen_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    delete_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    created_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tb_virtual_products_kitchen'
  });
};
