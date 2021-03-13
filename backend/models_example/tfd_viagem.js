const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tfd_viagem', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tfd_laudo_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tfd_estabelecimentos_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tfd_transportes_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data_ida: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_volta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ajuda_custo: {
      type: DataTypes.FLOAT(5,2),
      allowNull: true
    },
    comb_litros: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comb_valor: {
      type: DataTypes.FLOAT(5,2),
      allowNull: false
    },
    acompanhantes: {
      type: DataTypes.STRING(70),
      allowNull: false
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
    tableName: 'tfd_viagem',
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
        name: "tfd_viagem_FKIndex1",
        using: "BTREE",
        fields: [
          { name: "tfd_laudo_id" },
        ]
      },
      {
        name: "tfd_viagem_FKIndex2",
        using: "BTREE",
        fields: [
          { name: "tfd_transportes_id" },
        ]
      },
      {
        name: "tfd_viagem_FKIndex3",
        using: "BTREE",
        fields: [
          { name: "stabusuario_id_usuario" },
        ]
      },
      {
        name: "tfd_viagem_FKIndex4",
        using: "BTREE",
        fields: [
          { name: "tfd_estabelecimentos_id" },
        ]
      },
    ]
  });
};
