const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('procedimento_ocupacao', {
    co_procedimento: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    co_ocupacao: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    dt_competencia: {
      type: DataTypes.STRING(6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'procedimento_ocupacao',
    timestamps: false
  });
};
