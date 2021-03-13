const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoas25', {
    usuario: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    coddomicilio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    codpessoa: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    datacadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pispasep: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    cartaosus: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    doccertidaotipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    docnumcertidao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    docnomecartorio: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    doclivro: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    docfolhas: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    doctermo: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    docemissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    identidade: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    identidadecompl: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    identidadeuf: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    identidadeorgao: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    identidadeemissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ctps: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    ctpsserie: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ctpsuf: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ctpsemissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    titulo: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    titulozona: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    titulosecao: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    nomemae: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nomepai: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lograd: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    num: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: ""
    },
    compl: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    codbairro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    codcidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'pessoas25',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codpessoa" },
        ]
      },
    ]
  });
};
