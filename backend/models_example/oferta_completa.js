const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oferta_completa', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    oferta_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codprocedimento: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    vlsus: {
      type: DataTypes.DECIMAL(13,2),
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL(13,2),
      allowNull: false
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "A"
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
    }
  }, {
    sequelize,
    tableName: 'oferta_completa',
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
        name: "oferta_id_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "oferta_id" },
          { name: "codprocedimento" },
        ]
      },
      {
        name: "oferta_completa_FKIndex1",
        using: "BTREE",
        fields: [
          { name: "oferta_id" },
        ]
      },
      {
        name: "oferta_id",
        using: "BTREE",
        fields: [
          { name: "oferta_id" },
        ]
      },
    ]
  });
};
