const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_marc_tdf', {
    MES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CIDADE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    procedimento: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    QUANT: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'v_marc_tdf',
    timestamps: false
  });
};
