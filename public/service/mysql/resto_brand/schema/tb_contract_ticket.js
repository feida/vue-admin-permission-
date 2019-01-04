/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_contract_ticket', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    contract_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(2),
      allowNull: false
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
      allowNull: false,
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
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    bank_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bank_account: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tb_contract_ticket'
  });
};
