const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scadprofissional', {
    crm: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    numero_conselho: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    id_usuario_cad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data_cad: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_usuario_altera: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data_altera: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deletado: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
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
  });
};
