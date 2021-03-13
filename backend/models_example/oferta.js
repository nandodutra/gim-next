const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oferta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    estabelecimento_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    crm: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cbo: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    coddia: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hora_inicial: {
      type: DataTypes.TIME,
      allowNull: false
    },
    hora_final: {
      type: DataTypes.TIME,
      allowNull: false
    },
    qtd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qtd_pac: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qtd_urgencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    data_salva: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deletado: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    dia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estabelecimento_atendimento_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'oferta',
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
