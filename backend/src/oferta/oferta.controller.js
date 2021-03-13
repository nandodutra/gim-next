const { Sequelize, connection } = require('../../config/database')
const { Op } = require('sequelize')
const People = require('../../models/people')
const Oferta = require('../../models/oferta')
const OfertaCompleta = require('../../models/ofertaCompleta')
const Cota = require('../../models/cota')
const CotaItem = require('../../models/cotaItem')

const getProcedimentos = async function(table, ofertaId) {
  const oferta = await Oferta.findByPk(ofertaId, {
    include: [{
      model: OfertaCompleta
    }]
  })

  console.log('oferta', oferta)
  if (oferta && oferta.oferta_completa) {
    const arr = []

    oferta.oferta_completa.forEach(o => {
      arr.push(`${table}.codprocedimento = '${o.procedimentoId}'`)
    })

    return arr.join(' OR ')
  }

  return false
}

const getDataAtendimento = async (req, res) => {
  const { user } = req
  const { pessoaId, procedimentoId, profissionalId, estabelecimentoId } = req.params

  if (pessoaId && procedimentoId && profissionalId && estabelecimentoId) {
    const pessoa = await People.findByPk(pessoaId)

    const possiveisDatas = await connection.query(`SELECT DISTINCT 
        stabdataano.dataano as data, 
        dia, 
        hora_inicial 
      FROM 
        oferta
      INNER JOIN oferta_completa ON oferta.id = oferta_completa.oferta_id 
      INNER JOIN stabdataano ON DAYOFWEEK(stabdataano.dataano) = oferta.coddia 
      WHERE 
        oferta.estabelecimento_atendimento_id = '${estabelecimentoId}' 
        AND oferta.crm = '${profissionalId}' 
        AND (oferta.qtd > '0' OR oferta.qtd_pac > '0') 
        AND oferta_completa.codprocedimento = '${procedimentoId}' 
        AND oferta_completa.\`status\` = 'A' 
        AND stabdataano.\`status\` = 'N' 
        AND stabdataano.dataano >= DATE_FORMAT(DATE_ADD(NOW(), interval 0 DAY), '%Y/%m/%d') 
        AND oferta.deletado = 'N' 
        AND oferta_completa.deletado = 'N' 
      ORDER BY stabdataano.dataano ASC LIMIT 30`, { 
        type: Sequelize.QueryTypes.SELECT,
        raw: true 
      })

      const arrDatas = []

      possiveisDatas.forEach(async d => {
        const currentDate = d.data
        let ofertas = []
        if (['1', '5'].includes(user.tipoUsuario)) {
          ofertas = await connection.query(`
            SELECT 
              DISTINCT oferta.id, 
              oferta.qtd as ofertaQtd, 
              hora_inicial, 
              hora_final, 
              oferta.dia 
            FROM oferta 
            INNER JOIN oferta_completa ON oferta_completa.oferta_id = oferta.id 
            WHERE oferta.estabelecimento_atendimento_id = '${estabelecimentoId}' 
            AND oferta.crm = '${profissionalId}' 
            AND oferta.coddia = DAYOFWEEK('${currentDate}') 
            AND oferta_completa.codprocedimento = '${procedimentoId}' 
            AND oferta_completa.\`status\` = 'A' 
            AND oferta.qtd > '0' 
            AND oferta.deletado = 'N' 
            AND  oferta_completa.deletado = 'N' 
            ORDER BY DAYOFWEEK('${currentDate}'), hora_inicial ASC`, { 
              type: Sequelize.QueryTypes.SELECT,
              raw: true 
            })
        } else {
          ofertas = await connection.query(`
            SELECT 
              DISTINCT oferta.id, 
              oferta.qtd_pac as ofertaQtd, 
              hora_inicial, 
              hora_final, 
              oferta.dia 
            FROM oferta 
            INNER JOIN oferta_completa ON oferta_completa.oferta_id = oferta.id 
            WHERE oferta.estabelecimento_atendimento_id = '${estabelecimentoId}' 
            AND oferta.crm = '${profissionalId}' 
            AND oferta.coddia = DAYOFWEEK('${currentDate}') 
            AND oferta_completa.codprocedimento = '${profissionalId}' 
            AND oferta_completa.\`status\` = 'A' 
            AND oferta.qtd_pac > '0' 
            AND oferta.deletado = 'N' 
            AND oferta_completa.deletado = 'N'`, { 
              type: Sequelize.QueryTypes.SELECT,
              raw: true 
            })
        }

        ofertas.forEach(async oferta => {
          const procedimento = await getProcedimentos('smovagendamento', oferta.id)

          contagemMarcacoes = null
          if (['1', '5'].includes(user.tipoUsuario)) {
            contagemMarcacoes = await connection.query(`
              SELECT 
                count(*) as marcacoes 
                FROM smovagendamento 
              INNER JOIN scadestabelecimento ON smovagendamento.estab_origem = scadestabelecimento.id_estabelecimento 
              WHERE 
                estabelecimento_atendimento_id = '${estabelecimentoId}' 
                AND profexec = '${profissionalId}' 
                AND data = '${currentDate}' 
                AND situacao = 'M' 
                AND scadestabelecimento.tipestabelecimento <> 'P' 
                AND (${procedimento})  
                AND oferta_id = '${oferta.id}' 
                AND urgencia IS NULL`, { 
                  type: Sequelize.QueryTypes.SELECT,
                  raw: true 
                })
          } else {
            contagemMarcacoes = await connection.query(`
              SELECT 
                count(*) as marcacoes 
              FROM smovagendamento 
              INNER JOIN scadestabelecimento ON smovagendamento.estab_origem = scadestabelecimento.id_estabelecimento 
              WHERE 
              estabelecimento_atendimento_id = '${estabelecimentoId}' 
              AND profexec = '${profissionalId}' 
              AND data = '${currentDate}' 
              AND situacao = 'M' 
              AND scadestabelecimento.tipestabelecimento = 'P' 
              AND (${procedimento}) 
              AND oferta_id = '${oferta.id}' 
              AND urgencia IS NULL`, { 
                type: Sequelize.QueryTypes.SELECT,
                raw: true 
              })
          }

          const competencia = await Cota.findOne({
            where: {
              dataInicio: { [Op.lte]: currentDate },
              dataFim: { [Op.gte]: currentDate }
            }
          })

          const psfId = user.estabelecimento_id

          // Todo: implentar permissão pra um marcador de um psf poder marcar
          // para pessoa de outro psf


          const cota = await CotaItem.findOne({
            where: {
              cotas_id: competencia.id,
              scad_estabelecimento_id: psfId,
              codprocedimento: procedimentoId,
              total: { [Op.gte]: 0 }
            }
          })

          const cotaGrupo = await connection.query(`
            SELECT 
              ci.total, 
              gpp.grupo_id, 
              ci.id 
            FROM cota_itens ci
              INNER JOIN grupo_procedimentos_procedimento gpp ON gpp.grupo_id = ci.codprocedimento
            WHERE ci.total > 0 
            and gpp.procedimento_id = '${procedimentoId}' 
            and scad_estabelecimento_id = '${psfId}' 
            and cotas_id = '${competencia.id}'`, { 
              type: Sequelize.QueryTypes.SELECT,
              raw: true 
            })

          console.log('procedimento', procedimento)
        })
      })

      return res.send({})
  } else {
    return res.status(400).send([{ message: 'Dados de entrada inválidos.' }])
  }
}

module.exports = { getDataAtendimento }