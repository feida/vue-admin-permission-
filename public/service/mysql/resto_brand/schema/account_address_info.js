/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_address_info', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'account_address_info'
  });
};
