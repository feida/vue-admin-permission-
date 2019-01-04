/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('md_rul_article_bom_detail_history', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    article_bom_head_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    min_measure_unit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    },
    unit_name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    material_type: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    material_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    spec_name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    material_code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    material_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    loss_factor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    act_loss_factor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    material_count: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '1.0000'
    },
    creater_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    creater_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    gmt_create: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    gmt_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    version: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    state: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    start_effect: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    end_effect: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'md_rul_article_bom_detail_history'
  });
};
