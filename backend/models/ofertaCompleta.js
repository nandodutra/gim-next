const { connection, DataTypes } = require('../config/database')

const OfertaCompleta = connection.define('oferta_completa', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  ofertaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'oferta_id'
  },
  procedimentoId: {
    type: DataTypes.STRING(7),
    allowNull: false,
    field: 'codprocedimento'
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
  dataSalva: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'data_salva'
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_usuario'
  },
  deletado: {
    type: DataTypes.CHAR(1),
    allowNull: false,
    defaultValue: "N"
  }
}, {
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
})

module.exports = OfertaCompleta