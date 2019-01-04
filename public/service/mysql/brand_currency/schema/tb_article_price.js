/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_article_price', {
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    unit_ids: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fans_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    peference: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    article_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    stock_working_day: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '100'
    },
    stock_weekend: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '50'
    },
    current_working_stock: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '100'
    },
    empty_remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'tb_article_price'
  });
};
