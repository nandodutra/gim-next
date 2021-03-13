const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scadestabelecimento', {
    id_estabelecimento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipestabelecimento: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    razaosocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pessoafj: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cpfcnpj: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cnes: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    siasus: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tiplogradouro: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    codlogradouro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    logradouro: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    codbairro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codcidade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    complemento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Fone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cl_papel: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    sigla: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    classe: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    psf: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    marcador: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'scadestabelecimento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_estabelecimento" },
        ]
      },
    ]
  });
};
