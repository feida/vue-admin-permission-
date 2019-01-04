/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_table_code', {
    id: {
      type: DataTypes.STRING(33),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    code_number: {
      type: DataTypes.STRING(33),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    max_number: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    min_number: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    is_used: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    shop_detail_id: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'tb_table_code'
  });
};
