const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('procedimentos', {
    codsubgrupo: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    codprocedimento: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    apelido: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    observacoes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    numretornos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    limitemarcacao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sexopermitido: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "A"
    },
    numdiasintervalo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    faixaetariainicial: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    faixaetariafinal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 999
    },
    vlsus: {
      type: DataTypes.DECIMAL(13,2),
      allowNull: false,
      defaultValue: 0.00
    },
    vlcp: {
      type: DataTypes.DECIMAL(13,2),
      allowNull: true,
      defaultValue: 0.00
    },
    valor: {
      type: DataTypes.DECIMAL(13,2),
      allowNull: true,
      defaultValue: 0.00
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "I"
    },
    permissao: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "T"
    },
    tipmarc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    preferencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    codprocedimentocomp: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'procedimentos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codsubgrupo" },
          { name: "codprocedimento" },
        ]
      },
      {
        name: "ind_stt",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "ind_tipmarc",
        using: "BTREE",
        fields: [
          { name: "tipmarc" },
        ]
      },
      {
        name: "idx_sexo",
        using: "BTREE",
        fields: [
          { name: "sexopermitido" },
        ]
      },
      {
        name: "idx_proc",
        using: "BTREE",
        fields: [
          { name: "codprocedimento" },
        ]
      },
    ]
  });
};
