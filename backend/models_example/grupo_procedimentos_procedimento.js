const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_procedimentos_procedimento', {
    grupo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    procedimento_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'grupo_procedimentos_procedimento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "grupo_id" },
          { name: "procedimento_id" },
        ]
      },
      {
        name: "fk_grupo_procedimentos_has_stab_procedimento_stab_procedime_idx",
        using: "BTREE",
        fields: [
          { name: "procedimento_id" },
        ]
      },
      {
        name: "fk_grupo_procedimentos_has_stab_procedimento_grupo_procedim_idx",
        using: "BTREE",
        fields: [
          { name: "grupo_id" },
        ]
      },
    ]
  });
};
