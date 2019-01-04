/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_ticket', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    header: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    push_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ticket_status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    money: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    proposer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    taxpayer_code: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    registered_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    registered_phone: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    bank_name: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    bank_account: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    consignece_id: {
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    expersage: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'sms_ticket'
  });
};
