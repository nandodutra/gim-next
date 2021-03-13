const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agendafev', {
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
    }
  }, {
    sequelize,
    tableName: 'agendafev',
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
    ]
  });
};
