const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stab_ultra_horario', {
    idoferta: {
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
    coddia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    horario: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    oferta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ofertapac: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    id_estabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 955
    }
  }, {
    sequelize,
    tableName: 'stab_ultra_horario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idoferta" },
        ]
      },
    ]
  });
};
