/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_customer_detail', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    constellation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vocation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    school: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    personal_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    tableName: 'tb_customer_detail'
  });
};
