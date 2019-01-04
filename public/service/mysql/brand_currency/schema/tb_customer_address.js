/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_customer_address', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    sex: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    mobile_no: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    address_reality: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    label: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    longitude: {
      type: "DOUBLE(10,6)",
      allowNull: true
    },
    latitude: {
      type: "DOUBLE(10,6)",
      allowNull: true
    }
  }, {
    tableName: 'tb_customer_address'
  });
};
