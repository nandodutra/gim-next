const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scadestabelecimento_cont', {
    id_estabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    contato: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Funcao: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Fone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'scadestabelecimento_cont',
    timestamps: false
  });
};
