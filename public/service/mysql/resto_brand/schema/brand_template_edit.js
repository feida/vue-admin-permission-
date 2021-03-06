/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brand_template_edit', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    template_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    appid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    brand_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    template_sign: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    index: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pattern: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    push_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    push_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    start_sign: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    end_sign: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    old_start_sign: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    old_end_sign: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    big_open: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'brand_template_edit'
  });
};
