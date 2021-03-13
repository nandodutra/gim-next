const { Op } = require('sequelize')
const { DateTime } = require('luxon')
const People = require('../../models/people')
const Cidade = require('../../models/cidade')
const Bairro = require('../../models/bairro')


const findById = async (req, res) => {
  const { id } = req.params
  const people = await People.findByPk(id, {
    include: [{
      model: Cidade,
      as: 'cidade'
    }, {
      model: Bairro,
      as: 'bairro'
    }]
  })

  return res.send(people)
}

const findAll = async (req, res) => {
  const { searchType, searchValue } = req.query
  const filterField = searchType || 'nome'
  const where = {}

  if (!searchValue) {
    return res.status(400).send([{ message: 'O campo de pesquisa é obrigatório.' }])
  }

  if (searchValue.length < 3) {
    return res.status(400).send([{ message: 'O campo de pesquisa deve conter no mínimo 3 carateres.' }])
  }


  if (filterField === 'nome') {
    where[filterField] = { [Op.like]: `%${searchValue}%` }
  } else {
    where[filterField] = searchValue
  }
  
  const people = await People.findAll({ 
    where,
    limit: 10
  })

  return res.send(people)
}

const create = async (req, res) => {
  const { cpf, cartaosus, telefone, telefone2, telefone3 } = req.body

  // Verifica se já existe uma pessoa cadastrada com o mesmo CPF
  let people = await People.findOne({ where: { cpf: cpf.replace(/[^\d]/g, "") }})

  if (people) {
    return res.status(400).send([{ message: `O CPF ${cpf} já está cadatrado.` }])
  }

  // Verifica se já existe uma pessoa cadastrada com o mesmo Cartão SUS
  people = await People.findOne({ where: { cartaosus: cartaosus }})

  if (people) {
    return res.status(400).send([{ message: `O cartão SUS ${cartaosus} já está cadatrado.` }])
  }

  try {
    const data = { 
      ...req.body, 
      cpf: cpf.replace(/[^\d]/g, ""),
      datacadastro: DateTime.now(),
      telefone: telefone.replace(/[^\d]/g, ""),
      telefone2: telefone2 ? telefone2.replace(/[^\d]/g, "") : null,
      telefone3: telefone3 ? telefone3.replace(/[^\d]/g, "") : null,
      usuario: req.user.id
    }

    people = People.build(data)
    await people.save()

    return res.status(200).send(people);
  } catch(error) {
    console.log(error)
    return res.status(500).send([{ message: 'Error interno do servidor', serverError: error }])
  }
}

const update = async (req, res) => {
  const { id } = req.params
  const { cpf, telefone, telefone2, telefone3 } = req.body
  
  let people = await People.findByPk(id)

  try {
    const data = { 
      ...req.body, 
      cpf: cpf.replace(/[^\d]/g, ""),
      telefone: telefone.replace(/[^\d]/g, ""),
      telefone2: telefone2 ? telefone2.replace(/[^\d]/g, "") : null,
      telefone3: telefone3 ? telefone3.replace(/[^\d]/g, "") : null,
    }

    await people.update(data)

    return res.status(200).send(people);
  } catch(error) {
    console.log(error)
    return res.status(500).send([{ message: 'Error interno do servidor', serverError: error }])
  }
}

module.exports = { findById, findAll, create, update }