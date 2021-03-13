const { connection, DataTypes } = require('../config/database')
const OfertaCompleta = require('./ofertaCompleta')

const Oferta = connection.define('oferta', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  estabelecimentoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'estabelecimento_id'
  },
  profissionalId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'crm'
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
  horaInicial: {
    type: DataTypes.TIME,
    allowNull: false,
    field: 'hora_inicial'
  },
  horaFinal: {
    type: DataTypes.TIME,
    allowNull: false,
    field: 'hora_final'
  },
  qtd: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  qtdPac: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'qtd_pac'
  },
  qtdUrgencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: 'qtd_urgencia'
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
  },
  dia: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  estabelecimentoAtendimentoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'estabelecimento_atendimento_id'
  }
}, {
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
})

Oferta.hasMany(OfertaCompleta, {
  foreignKey: 'oferta_id'
})

module.exports = Oferta