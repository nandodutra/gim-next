const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codigos', {
    vei: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    novo: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'codigos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vei" },
        ]
      },
    ]
  });
};
