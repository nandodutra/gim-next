const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    endereco: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    bairro: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    cidade: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    uf: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    cep: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    telefone: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    identidade: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    orgao: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    uf_rg: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    dt_nasc: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    naturalidade: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    nome_mae: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    nome_pai: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pessoas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
