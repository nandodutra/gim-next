const { Sequelize, connection } = require('../../config/database')

const findProfissionalXProcedimento = async (req, res) => {
  const { procedimentoId } = req.params
  
  const profissionais = await connection.query(`SELECT DISTINCT 
      oferta.crm as id, scadprofissional.descricao as nome 
    FROM oferta 
      INNER JOIN oferta_completa ON oferta.id = oferta_completa.oferta_id 
      INNER JOIN scadprofissional ON scadprofissional.crm = oferta.crm 
    WHERE oferta_completa.codprocedimento = '${procedimentoId}' 
      AND oferta_completa.status = 'A' 
      AND (oferta.qtd > '0' OR oferta.qtd_pac > 0) 
      AND oferta.deletado = 'N' 
      AND oferta_completa.deletado = 'N' 
    ORDER BY scadprofissional.descricao ASC`, { 
      type: Sequelize.QueryTypes.SELECT,
      raw: true 
    })

  return res.send(profissionais)
}

module.exports = { findProfissionalXProcedimento }