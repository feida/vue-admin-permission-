/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_article_sale_record', {
    ARTICLE_SALE_RECORD_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ARTICLE_ID: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SYSTEM_NUMBER: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    OTHER_NUMBER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    TOTAL_NUMBER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    TARGET_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    CREATE_TIME: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UPDATE_TIME: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    SORT: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tb_article_sale_record'
  });
};
