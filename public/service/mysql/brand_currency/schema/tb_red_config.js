/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_red_config', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    delay: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '900'
    },
    min_ratio: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    max_ratio: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '5'
    },
    max_single_red: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '10.00'
    },
    title: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    min_signle_red: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.50'
    },
    is_add_ratio: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    min_translate_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '10.00'
    },
    is_activity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    tableName: 'tb_red_config'
  });
};
