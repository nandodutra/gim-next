const Bairro = require('../../models/bairro')

const findAll = async (req, res) => {
  const { cidadeId } = req.query
  const where = {
    cidadeId
  }

  if (!cidadeId) {
    return res.status(400).send([{ message: 'É necessário informar a cidade para consultar os bairros.' }])
  }

  try {
    const bairros = await Bairro.findAll({
      where
    })

    return res.send(bairros)
  } catch(error) {
    return res.status(500).send([{ message: 'Ouve um erro interno do sistema.' }])
  }
}

module.exports = { findAll }