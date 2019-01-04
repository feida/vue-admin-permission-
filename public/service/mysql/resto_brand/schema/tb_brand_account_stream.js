/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_brand_account_stream', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    account_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_account: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    add_account: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    remain_account: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'tb_brand_account_stream'
  });
};
