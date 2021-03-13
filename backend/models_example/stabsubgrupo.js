const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stabsubgrupo', {
    codsubgrupo: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    NIVEL: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'stabsubgrupo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codsubgrupo" },
        ]
      },
    ]
  });
};
