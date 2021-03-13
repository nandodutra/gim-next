const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tfd_cid10', {
    codcat: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    codsubcat: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tfd_cid10',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codsubcat" },
        ]
      },
      {
        name: "codcat",
        using: "BTREE",
        fields: [
          { name: "codcat" },
        ]
      },
    ]
  });
};
