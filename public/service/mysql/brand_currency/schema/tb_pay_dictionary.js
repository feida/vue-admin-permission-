/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_pay_dictionary', {
    resto_pay_mode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    weqian_paty_mode: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'tb_pay_dictionary'
  });
};
