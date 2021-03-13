const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instituicoes', {
    idinstituicao: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    logradouro: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bairro: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    numero: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cidade: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    apelido: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'instituicoes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idinstituicao" },
        ]
      },
    ]
  });
};
