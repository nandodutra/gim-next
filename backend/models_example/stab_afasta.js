const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stab_afasta', {
    idafasta: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    crm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    codprocedimento: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    id_estabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: true
    },
    fim: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_fim: {
      type: DataTypes.TIME,
      allowNull: true
    },
    motivo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_salv: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ID_User: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'stab_afasta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idafasta" },
        ]
      },
    ]
  });
};
