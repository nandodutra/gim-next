const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stab_radio_horario', {
    idoferta: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_estabelecimento: {
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
      type: DataTypes.STRING(8),
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
    }
  }, {
    sequelize,
    tableName: 'stab_radio_horario',
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
