/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_svip', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    charge_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    be_svip_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    svip_expire: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    begin_date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    activity_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    svip_expire_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'tb_svip'
  });
};
