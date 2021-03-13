const express = require('express')
const AuthMiddleware = require('../middleware/auth')
const AuthController = require('../src/auth/auth.controller')
const UserController = require('../src/user/user.controlller')
const PeopleControler = require('../src/people/people.controller')
const BairroController = require('../src/bairro/bairro.controller')
const ProcedimentoController = require('../src/procedimento/procedimento.controller')
const ProfissionalController = require('../src/profissional/profissional.controller')
const EstabelecimentoController = require('../src/estabelecimento/estabelecimento.controller')
const OfertaController = require('../src/oferta/oferta.controller')

module.exports = function(server) {
  //API Privada
  const privateApi = express.Router()
  server.use('/api', privateApi)
  privateApi.use(AuthMiddleware)
  privateApi.get('/users', UserController.findAll)
  
  privateApi.get('/people/:id', PeopleControler.findById)
  privateApi.get('/people', PeopleControler.findAll)
  privateApi.post('/people', PeopleControler.create)
  privateApi.put('/people/:id', PeopleControler.update)

  privateApi.get('/procedimento/schedule', ProcedimentoController.findAllForSchedule)
  privateApi.get('/profissinoal-vs-procedimento/:procedimentoId', ProfissionalController.findProfissionalXProcedimento)
  privateApi.get('/estabelecimento-vs-profissinoal-vs-procedimento/:procedimentoId/:profissionalId', EstabelecimentoController.findEstabelecimentoXProfissionalXProcedimento)
  privateApi.get('/oferta/datas/:pessoaId/:procedimentoId/:profissionalId/:estabelecimentoId', OfertaController.getDataAtendimento)
 
  privateApi.get('/bairro', BairroController.findAll)

  //API Pública
  const publicApi = express.Router()
  server.use('/', publicApi)

  publicApi.post('/login', AuthController.signIn)
  publicApi.post('/check-token', AuthController.checkToken)
}