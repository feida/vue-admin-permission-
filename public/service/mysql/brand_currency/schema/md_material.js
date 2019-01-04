/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('md_material', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    material_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true
    },
    barcode: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    material_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    category_one_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    category_two_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    category_third_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    spec_name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    spec_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    unit_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    unit_name: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    measure_unit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    min_measure_unit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    min_unit_name: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    min_unit_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    rate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    convert_unit_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    convert_unit_name: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    coefficient: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    material_type: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    print_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    creater_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    creater_name: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: ''
    },
    updater_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    updater_name: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: ''
    },
    version: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '1'
    },
    is_delete: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    gmt_create: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    gmt_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    province_id: {
      type: DataTypes.INTEGER(32),
      allowNull: true
    },
    province_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    city_id: {
      type: DataTypes.INTEGER(32),
      allowNull: true
    },
    city_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    district_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    district_id: {
      type: DataTypes.INTEGER(32),
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    state: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'md_material'
  });
};
