const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tfd_laudo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    tfd_cid10_codsubcat: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    stabusuario_id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scadprofissional_crm: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scadpessoas_codpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    historico_doenca: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    diagnostico: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    exames_complementares: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    tratamentos_realizados: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    indicacao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duracao_ano: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    duracao_mes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    duracao_dia: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "0"
    },
    duracao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    just_tratamento: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    just_urgencia: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    just_acompanhante: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tipo_veiculo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    just_transporte: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sdata: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data_laudo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tfd_laudo',
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
      {
        name: "tfd_laudo_FKIndex1",
        using: "BTREE",
        fields: [
          { name: "scadpessoas_codpessoa" },
        ]
      },
      {
        name: "tfd_laudo_FKIndex3",
        using: "BTREE",
        fields: [
          { name: "scadprofissional_crm" },
        ]
      },
      {
        name: "tfd_laudo_FKIndex4",
        using: "BTREE",
        fields: [
          { name: "stabusuario_id_usuario" },
        ]
      },
      {
        name: "tfd_laudo_FKIndex5",
        using: "BTREE",
        fields: [
          { name: "tfd_cid10_codsubcat" },
        ]
      },
    ]
  });
};
