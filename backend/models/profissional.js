const { connection, DataTypes } = require('../config/database');
const Oferta = require('./oferta')

const Profissional = connection.define('scadprofissional', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'crm'
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'descricao'
  },
  numeroConselho: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'numero_conselho'
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: true
  },
  cns: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  especialidade: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  fonecomercial: {
    type: DataTypes.STRING(14),
    allowNull: true
  },
  fonecelular: {
    type: DataTypes.STRING(14),
    allowNull: true
  },
  tipoprof: {
    type: DataTypes.CHAR(1),
    allowNull: false,
    defaultValue: "M"
  },
  status: {
    type: DataTypes.CHAR(1),
    allowNull: false,
    defaultValue: "A"
  },
  criacaoUsuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_usuario_cad'
  },
  dataCriacao: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'data_cad'
  },
  atualizacaoUsuarioId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'id_usuario_altera'
  },
  dataAtualizacao: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'data_altera'
  },
  deletado: {
    type: DataTypes.CHAR(1),
    allowNull: false,
    defaultValue: "N"
  }
}, {
  tableName: 'scadprofissional',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "crm" },
      ]
    },
  ]
})

Profissional.hasMany(Oferta, {
  foreignKey: 'profissionalId'
})

module.exports = Profissional