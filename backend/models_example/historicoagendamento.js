const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicoagendamento', {
    id_usuario: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    data_sistema: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estab_origem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codpessoa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codprocedimento: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    ultimoprocedimento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codestabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    codhorario: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    identificacao: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    protocolo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    utilizado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    crm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    profexec: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    motivo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    situacao: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "M"
    },
    data_confirmacao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00"
    },
    encaixe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    id_enc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'historicoagendamento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "identificacao" },
        ]
      },
      {
        name: "ind_data",
        using: "BTREE",
        fields: [
          { name: "data" },
        ]
      },
      {
        name: "ind_local",
        using: "BTREE",
        fields: [
          { name: "estab_origem" },
        ]
      },
      {
        name: "ind_proc",
        using: "BTREE",
        fields: [
          { name: "codprocedimento" },
        ]
      },
      {
        name: "ind_user",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "idx_situa",
        using: "BTREE",
        fields: [
          { name: "situacao" },
        ]
      },
      {
        name: "idx_estab",
        using: "BTREE",
        fields: [
          { name: "codestabelecimento" },
        ]
      },
      {
        name: "idx_prof",
        using: "BTREE",
        fields: [
          { name: "profexec" },
        ]
      },
      {
        name: "idx_utilizado",
        using: "BTREE",
        fields: [
          { name: "utilizado" },
        ]
      },
    ]
  });
};
