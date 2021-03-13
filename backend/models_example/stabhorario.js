const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stabhorario', {
    codhorario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    horainicial: {
      type: DataTypes.TIME,
      allowNull: true
    },
    horafinal: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: "00:00:00"
    }
  }, {
    sequelize,
    tableName: 'stabhorario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codhorario" },
        ]
      },
    ]
  });
};
