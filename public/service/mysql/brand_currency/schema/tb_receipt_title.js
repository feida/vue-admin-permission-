/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_receipt_title', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    duty_paragraph: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    company_address: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    mobile_no: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    bank_of_deposit: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    bank_number: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(1),
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
    }
  }, {
    tableName: 'tb_receipt_title'
  });
};
