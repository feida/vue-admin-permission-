/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('md_material_view', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    shopDetailId: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    barcode: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    convertUnitName: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    convertUnitId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    measureUnit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    specId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    specName: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    unitName: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    unitId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    minUnitName: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    minMeasureUnit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    minUnitId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    materialType: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    materialCode: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    materialName: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    provinceId: {
      type: DataTypes.INTEGER(32),
      allowNull: true
    },
    provinceName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    cityId: {
      type: DataTypes.INTEGER(32),
      allowNull: true
    },
    cityName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    districtName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    districtId: {
      type: DataTypes.INTEGER(32),
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    rate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    coefficient: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    state: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    printName: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    categoryOneId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    categoryOneName: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    categoryOneCode: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    categoryTwoId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    categoryTwoName: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    categoryTwoCode: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    categoryThirdId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    categoryThirdName: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    categoryThirdCode: {
      type: DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    tableName: 'md_material_view'
  });
};
