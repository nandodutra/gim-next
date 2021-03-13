const { Op } = require('sequelize')
const { DateTime } = require('luxon')
const Procedimento = require('../../models/procedimento')
const People = require('../../models/people')

const findAllForSchedule = async (req, res) => {
  const { descricao, pessoaId } = req.query
  
  if (!pessoaId) {
    return res.status(400).send([{ message: 'É necessário informar o id da pessoa.' }])
  }
    
  const pessoa = await People.findByPk(pessoaId)

  const agora = DateTime.now()
  const dataNascimento = DateTime.fromSQL(pessoa.nascimento)
  const idade = agora.diff(dataNascimento, 'months').toObject()

  if (!pessoa) {
    return res.status(404).send([{ message: 'Registro não encontrado.' }])
  }

  const procedimentos = await Procedimento.findAll({
    where: {
      descricao: {  [Op.like]: `%${descricao}%` },
      sexopermitido: { [Op.in]: ['A', pessoa.sexo] },
      faixaetariainicial: { [Op.lte]: idade.months },
      faixaetariafinal: { [Op.gte]: idade.months },
      tipmarc: { [Op.gte]: req.user.tipoUsuario }
    }
  })

  return res.send(procedimentos)
}

module.exports = { findAllForSchedule }