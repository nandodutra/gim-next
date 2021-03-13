const { Sequelize, connection } = require('../../config/database')

const findEstabelecimentoXProfissionalXProcedimento = async (req, res) => {
  const { procedimentoId, profissionalId } = req.params
  
  const estabelecimentos = await connection.query(`SELECT DISTINCT 
      scadestabelecimento.id_estabelecimento as id, 
      scadestabelecimento.descricao as nome
    FROM oferta 
      INNER JOIN oferta_completa ON oferta.id = oferta_completa.oferta_id 
      INNER JOIN scadestabelecimento ON scadestabelecimento.id_estabelecimento = oferta.estabelecimento_atendimento_id 
    WHERE 
      oferta_completa.codprocedimento = '${procedimentoId}' 
      AND oferta.crm = '${profissionalId}' 
      AND oferta_completa.status = 'A' 
      AND (oferta.qtd > '0' OR oferta.qtd_pac > 0) 
      AND oferta.deletado = 'N' 
      AND oferta_completa.deletado = 'N' 
    ORDER BY scadestabelecimento.descricao ASC`, { 
      type: Sequelize.QueryTypes.SELECT,
      raw: true 
    })

  return res.send(estabelecimentos)
}

module.exports = { findEstabelecimentoXProfissionalXProcedimento }