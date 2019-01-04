/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_new_employee', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    role_type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    nick_name: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    sex: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    wechat_avatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'tb_new_employee'
  });
};
