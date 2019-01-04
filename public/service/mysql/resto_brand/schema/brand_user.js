/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brand_user', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_login_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    super_pwd: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'e737e740ec74dc7284954b4dca75087eb0be7ea7'
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    sex: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'brand_user'
  });
};
