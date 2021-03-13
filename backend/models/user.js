const { Sequelize, connection, DataTypes } = require('../config/database');

const Usuario = connection.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_usuario'
    },
    estabelecimento_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'id_estabelecimento'
    },
    login: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'Senha'
    },
    Nome: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tipoUsuario: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: 'tipusuario'
    },
    alterado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "A"
    },
    comunicador: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "P"
    },
    extensao: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    horario_login_inicio: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: "00:00:00"
    },
    horario_login_final: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: "00:00:00"
    },
    ultima_atividade: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'stabusuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "idx_tp_usu",
        using: "BTREE",
        fields: [
          { name: "tipusuario" },
        ]
      },
    ]
  })

module.exports = Usuario
