const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tfd_passagem', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tfd_agencia_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tfd_viagem_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    viajantes_ida: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    viajantes_volta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vlr_ida: {
      type: DataTypes.FLOAT(5,2),
      allowNull: true
    },
    vlr_volta: {
      type: DataTypes.FLOAT(5,2),
      allowNull: true
    },
    tx_ida: {
      type: DataTypes.FLOAT(2,2),
      allowNull: true
    },
    tx_volta: {
      type: DataTypes.FLOAT(2,2),
      allowNull: true
    },
    obs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stabusuario_id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sdata: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tfd_passagem',
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
        name: "tfd_passagem_FKIndex1",
        using: "BTREE",
        fields: [
          { name: "stabusuario_id_usuario" },
        ]
      },
      {
        name: "tfd_passagem_FKIndex2",
        using: "BTREE",
        fields: [
          { name: "tfd_viagem_id" },
        ]
      },
      {
        name: "tfd_passagem_FKIndex3",
        using: "BTREE",
        fields: [
          { name: "tfd_agencia_id" },
        ]
      },
    ]
  });
};
