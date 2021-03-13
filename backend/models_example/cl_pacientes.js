const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cl_pacientes', {
    codpaciente: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    datahora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    unid_solicitante: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    scnes: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nome_pac: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tp_doc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    num_doc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    datanasc: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mae: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    end: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    car_sus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    digitador: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    local: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    eletiva: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ele_datahora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    especialidade: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    codusuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cidade: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    p_datahora: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    codproced: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    med_solicita: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    crm_solicita: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    med_autoriza: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    crm_autoriza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dt_autoriza: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    diagnostico: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cl_pacientes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codpaciente" },
          { name: "codusuario" },
        ]
      },
    ]
  });
};
