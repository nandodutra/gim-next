const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_valor', {
    codestabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codprocedimento: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    vlsus: {
      type: DataTypes.DECIMAL(13,2),
      allowNull: true
    },
    valor: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'v_valor',
    timestamps: false
  });
};
