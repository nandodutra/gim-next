var DataTypes = require("sequelize").DataTypes;
var _agendafev = require("./agendafev");
var _agendamento_psf = require("./agendamento_psf");
var _atualiza = require("./atualiza");
var _bpa2006 = require("./bpa2006");
var _cl_pacientes = require("./cl_pacientes");
var _cl_usuarios = require("./cl_usuarios");
var _codigos = require("./codigos");
var _competencia = require("./competencia");
var _controle = require("./controle");
var _cota_itens = require("./cota_itens");
var _cotalab_mes_pact = require("./cotalab_mes_pact");
var _cotas = require("./cotas");
var _cotas_especialidades = require("./cotas_especialidades");
var _datalabs = require("./datalabs");
var _grupo = require("./grupo");
var _grupo_procedimentos = require("./grupo_procedimentos");
var _grupo_procedimentos_procedimento = require("./grupo_procedimentos_procedimento");
var _hist_cancel_fila = require("./hist_cancel_fila");
var _historicoagendamento = require("./historicoagendamento");
var _ibge = require("./ibge");
var _instituicoes = require("./instituicoes");
var _laboratorio_quantidade = require("./laboratorio_quantidade");
var _logar = require("./logar");
var _menu = require("./menu");
var _ocupacao = require("./ocupacao");
var _oferta = require("./oferta");
var _oferta_completa = require("./oferta_completa");
var _oferta_valores = require("./oferta_valores");
var _pais = require("./pais");
var _parametro = require("./parametro");
var _permissao_marcacao = require("./permissao_marcacao");
var _pesquisa = require("./pesquisa");
var _pessoas = require("./pessoas");
var _pessoas25 = require("./pessoas25");
var _procedimento_ocupacao = require("./procedimento_ocupacao");
var _procedimentos = require("./procedimentos");
var _programa = require("./programa");
var _programa_pessoa = require("./programa_pessoa");
var _programa_procedimento = require("./programa_procedimento");
var _relat_fin = require("./relat_fin");
var _relat_finan = require("./relat_finan");
var _relatorios = require("./relatorios");
var _rotas = require("./rotas");
var _scaddomicilio = require("./scaddomicilio");
var _scadestabelecimento = require("./scadestabelecimento");
var _scadestabelecimento_cont = require("./scadestabelecimento_cont");
var _scadoferta = require("./scadoferta");
var _scadpessoas = require("./scadpessoas");
var _scadprofissional = require("./scadprofissional");
var _smovagendamento = require("./smovagendamento");
var _smovfila = require("./smovfila");
var _stab_afasta = require("./stab_afasta");
var _stab_afasta_fisio = require("./stab_afasta_fisio");
var _stab_afasta_lab = require("./stab_afasta_lab");
var _stab_audio_horario = require("./stab_audio_horario");
var _stab_bpa = require("./stab_bpa");
var _stab_estab_proced = require("./stab_estab_proced");
var _stab_fisio_periodo = require("./stab_fisio_periodo");
var _stab_log = require("./stab_log");
var _stab_pact_proced = require("./stab_pact_proced");
var _stab_prontuario = require("./stab_prontuario");
var _stab_radio_horario = require("./stab_radio_horario");
var _stab_tetofin_estab = require("./stab_tetofin_estab");
var _stab_tetoqtd_estab = require("./stab_tetoqtd_estab");
var _stab_ultra_horario = require("./stab_ultra_horario");
var _stabbairro = require("./stabbairro");
var _stabcidade = require("./stabcidade");
var _stabd_reprimida = require("./stabd_reprimida");
var _stabdataano = require("./stabdataano");
var _stabdia = require("./stabdia");
var _stabhisto_cancel = require("./stabhisto_cancel");
var _stabhorario = require("./stabhorario");
var _stabhorariohmtf = require("./stabhorariohmtf");
var _stablogradouro = require("./stablogradouro");
var _stablogradouro_tip = require("./stablogradouro_tip");
var _stabprocedimento = require("./stabprocedimento");
var _stabreserva = require("./stabreserva");
var _stabsubgrupo = require("./stabsubgrupo");
var _stabusuario = require("./stabusuario");
var _teto_financeiro = require("./teto_financeiro");
var _tfd_acompanhantes = require("./tfd_acompanhantes");
var _tfd_agencia = require("./tfd_agencia");
var _tfd_cid10 = require("./tfd_cid10");
var _tfd_cidade = require("./tfd_cidade");
var _tfd_estabelecimentos = require("./tfd_estabelecimentos");
var _tfd_estado = require("./tfd_estado");
var _tfd_laudo = require("./tfd_laudo");
var _tfd_laudo_obs = require("./tfd_laudo_obs");
var _tfd_obs = require("./tfd_obs");
var _tfd_passagem = require("./tfd_passagem");
var _tfd_transportes = require("./tfd_transportes");
var _tfd_viagem = require("./tfd_viagem");
var _url = require("./url");
var _users = require("./users");
var _v_marc_tdf = require("./v_marc_tdf");
var _v_pacto_marc = require("./v_pacto_marc");
var _v_pacto_util = require("./v_pacto_util");
var _v_valor = require("./v_valor");
var _vinculo = require("./vinculo");
var _vinculo_atencao_basica = require("./vinculo_atencao_basica");
var _vinculo_cbo = require("./vinculo_cbo");
var _vl_sus = require("./vl_sus");

function initModels(sequelize) {
  var agendafev = _agendafev(sequelize, DataTypes);
  var agendamento_psf = _agendamento_psf(sequelize, DataTypes);
  var atualiza = _atualiza(sequelize, DataTypes);
  var bpa2006 = _bpa2006(sequelize, DataTypes);
  var cl_pacientes = _cl_pacientes(sequelize, DataTypes);
  var cl_usuarios = _cl_usuarios(sequelize, DataTypes);
  var codigos = _codigos(sequelize, DataTypes);
  var competencia = _competencia(sequelize, DataTypes);
  var controle = _controle(sequelize, DataTypes);
  var cota_itens = _cota_itens(sequelize, DataTypes);
  var cotalab_mes_pact = _cotalab_mes_pact(sequelize, DataTypes);
  var cotas = _cotas(sequelize, DataTypes);
  var cotas_especialidades = _cotas_especialidades(sequelize, DataTypes);
  var datalabs = _datalabs(sequelize, DataTypes);
  var grupo = _grupo(sequelize, DataTypes);
  var grupo_procedimentos = _grupo_procedimentos(sequelize, DataTypes);
  var grupo_procedimentos_procedimento = _grupo_procedimentos_procedimento(sequelize, DataTypes);
  var hist_cancel_fila = _hist_cancel_fila(sequelize, DataTypes);
  var historicoagendamento = _historicoagendamento(sequelize, DataTypes);
  var ibge = _ibge(sequelize, DataTypes);
  var instituicoes = _instituicoes(sequelize, DataTypes);
  var laboratorio_quantidade = _laboratorio_quantidade(sequelize, DataTypes);
  var logar = _logar(sequelize, DataTypes);
  var menu = _menu(sequelize, DataTypes);
  var ocupacao = _ocupacao(sequelize, DataTypes);
  var oferta = _oferta(sequelize, DataTypes);
  var oferta_completa = _oferta_completa(sequelize, DataTypes);
  var oferta_valores = _oferta_valores(sequelize, DataTypes);
  var pais = _pais(sequelize, DataTypes);
  var parametro = _parametro(sequelize, DataTypes);
  var permissao_marcacao = _permissao_marcacao(sequelize, DataTypes);
  var pesquisa = _pesquisa(sequelize, DataTypes);
  var pessoas = _pessoas(sequelize, DataTypes);
  var pessoas25 = _pessoas25(sequelize, DataTypes);
  var procedimento_ocupacao = _procedimento_ocupacao(sequelize, DataTypes);
  var procedimentos = _procedimentos(sequelize, DataTypes);
  var programa = _programa(sequelize, DataTypes);
  var programa_pessoa = _programa_pessoa(sequelize, DataTypes);
  var programa_procedimento = _programa_procedimento(sequelize, DataTypes);
  var relat_fin = _relat_fin(sequelize, DataTypes);
  var relat_finan = _relat_finan(sequelize, DataTypes);
  var relatorios = _relatorios(sequelize, DataTypes);
  var rotas = _rotas(sequelize, DataTypes);
  var scaddomicilio = _scaddomicilio(sequelize, DataTypes);
  var scadestabelecimento = _scadestabelecimento(sequelize, DataTypes);
  var scadestabelecimento_cont = _scadestabelecimento_cont(sequelize, DataTypes);
  var scadoferta = _scadoferta(sequelize, DataTypes);
  var scadpessoas = _scadpessoas(sequelize, DataTypes);
  var scadprofissional = _scadprofissional(sequelize, DataTypes);
  var smovagendamento = _smovagendamento(sequelize, DataTypes);
  var smovfila = _smovfila(sequelize, DataTypes);
  var stab_afasta = _stab_afasta(sequelize, DataTypes);
  var stab_afasta_fisio = _stab_afasta_fisio(sequelize, DataTypes);
  var stab_afasta_lab = _stab_afasta_lab(sequelize, DataTypes);
  var stab_audio_horario = _stab_audio_horario(sequelize, DataTypes);
  var stab_bpa = _stab_bpa(sequelize, DataTypes);
  var stab_estab_proced = _stab_estab_proced(sequelize, DataTypes);
  var stab_fisio_periodo = _stab_fisio_periodo(sequelize, DataTypes);
  var stab_log = _stab_log(sequelize, DataTypes);
  var stab_pact_proced = _stab_pact_proced(sequelize, DataTypes);
  var stab_prontuario = _stab_prontuario(sequelize, DataTypes);
  var stab_radio_horario = _stab_radio_horario(sequelize, DataTypes);
  var stab_tetofin_estab = _stab_tetofin_estab(sequelize, DataTypes);
  var stab_tetoqtd_estab = _stab_tetoqtd_estab(sequelize, DataTypes);
  var stab_ultra_horario = _stab_ultra_horario(sequelize, DataTypes);
  var stabbairro = _stabbairro(sequelize, DataTypes);
  var stabcidade = _stabcidade(sequelize, DataTypes);
  var stabd_reprimida = _stabd_reprimida(sequelize, DataTypes);
  var stabdataano = _stabdataano(sequelize, DataTypes);
  var stabdia = _stabdia(sequelize, DataTypes);
  var stabhisto_cancel = _stabhisto_cancel(sequelize, DataTypes);
  var stabhorario = _stabhorario(sequelize, DataTypes);
  var stabhorariohmtf = _stabhorariohmtf(sequelize, DataTypes);
  var stablogradouro = _stablogradouro(sequelize, DataTypes);
  var stablogradouro_tip = _stablogradouro_tip(sequelize, DataTypes);
  var stabprocedimento = _stabprocedimento(sequelize, DataTypes);
  var stabreserva = _stabreserva(sequelize, DataTypes);
  var stabsubgrupo = _stabsubgrupo(sequelize, DataTypes);
  var stabusuario = _stabusuario(sequelize, DataTypes);
  var teto_financeiro = _teto_financeiro(sequelize, DataTypes);
  var tfd_acompanhantes = _tfd_acompanhantes(sequelize, DataTypes);
  var tfd_agencia = _tfd_agencia(sequelize, DataTypes);
  var tfd_cid10 = _tfd_cid10(sequelize, DataTypes);
  var tfd_cidade = _tfd_cidade(sequelize, DataTypes);
  var tfd_estabelecimentos = _tfd_estabelecimentos(sequelize, DataTypes);
  var tfd_estado = _tfd_estado(sequelize, DataTypes);
  var tfd_laudo = _tfd_laudo(sequelize, DataTypes);
  var tfd_laudo_obs = _tfd_laudo_obs(sequelize, DataTypes);
  var tfd_obs = _tfd_obs(sequelize, DataTypes);
  var tfd_passagem = _tfd_passagem(sequelize, DataTypes);
  var tfd_transportes = _tfd_transportes(sequelize, DataTypes);
  var tfd_viagem = _tfd_viagem(sequelize, DataTypes);
  var url = _url(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var v_marc_tdf = _v_marc_tdf(sequelize, DataTypes);
  var v_pacto_marc = _v_pacto_marc(sequelize, DataTypes);
  var v_pacto_util = _v_pacto_util(sequelize, DataTypes);
  var v_valor = _v_valor(sequelize, DataTypes);
  var vinculo = _vinculo(sequelize, DataTypes);
  var vinculo_atencao_basica = _vinculo_atencao_basica(sequelize, DataTypes);
  var vinculo_cbo = _vinculo_cbo(sequelize, DataTypes);
  var vl_sus = _vl_sus(sequelize, DataTypes);


  return {
    agendafev,
    agendamento_psf,
    atualiza,
    bpa2006,
    cl_pacientes,
    cl_usuarios,
    codigos,
    competencia,
    controle,
    cota_itens,
    cotalab_mes_pact,
    cotas,
    cotas_especialidades,
    datalabs,
    grupo,
    grupo_procedimentos,
    grupo_procedimentos_procedimento,
    hist_cancel_fila,
    historicoagendamento,
    ibge,
    instituicoes,
    laboratorio_quantidade,
    logar,
    menu,
    ocupacao,
    oferta,
    oferta_completa,
    oferta_valores,
    pais,
    parametro,
    permissao_marcacao,
    pesquisa,
    pessoas,
    pessoas25,
    procedimento_ocupacao,
    procedimentos,
    programa,
    programa_pessoa,
    programa_procedimento,
    relat_fin,
    relat_finan,
    relatorios,
    rotas,
    scaddomicilio,
    scadestabelecimento,
    scadestabelecimento_cont,
    scadoferta,
    scadpessoas,
    scadprofissional,
    smovagendamento,
    smovfila,
    stab_afasta,
    stab_afasta_fisio,
    stab_afasta_lab,
    stab_audio_horario,
    stab_bpa,
    stab_estab_proced,
    stab_fisio_periodo,
    stab_log,
    stab_pact_proced,
    stab_prontuario,
    stab_radio_horario,
    stab_tetofin_estab,
    stab_tetoqtd_estab,
    stab_ultra_horario,
    stabbairro,
    stabcidade,
    stabd_reprimida,
    stabdataano,
    stabdia,
    stabhisto_cancel,
    stabhorario,
    stabhorariohmtf,
    stablogradouro,
    stablogradouro_tip,
    stabprocedimento,
    stabreserva,
    stabsubgrupo,
    stabusuario,
    teto_financeiro,
    tfd_acompanhantes,
    tfd_agencia,
    tfd_cid10,
    tfd_cidade,
    tfd_estabelecimentos,
    tfd_estado,
    tfd_laudo,
    tfd_laudo_obs,
    tfd_obs,
    tfd_passagem,
    tfd_transportes,
    tfd_viagem,
    url,
    users,
    v_marc_tdf,
    v_pacto_marc,
    v_pacto_util,
    v_valor,
    vinculo,
    vinculo_atencao_basica,
    vinculo_cbo,
    vl_sus,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
