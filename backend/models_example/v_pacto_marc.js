const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_pacto_marc', {
    ANO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CIDADE: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    QUANT: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    VALOR: {
      type: DataTypes.DECIMAL(35,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'v_pacto_marc',
    timestamps: false
  });
};
