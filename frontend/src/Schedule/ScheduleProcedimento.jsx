import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import AsyncSelect from 'react-select/async';
import Select from 'react-select'
import contants from '../consts';
import { Link } from 'react-router-dom';
import Normalize from '../common/normalize';

const ScheduleProcedimento = props => {
  const { pessoaId } = useParams()
  const [people, setPeople] = useState({})
  const [procedimento, setProcedimento] = useState(null)
  const [profissional, setProfissional] = useState(null)
  const [estabelecimento, setEstabelecimento] = useState(null)

  const [procedimentos, setProcedimentos] = useState([])
  const [profissionais, setProfissionais] = useState([])
  const [estabelecimentos, setEstabelecimentos] = useState([])
  const [datas, setDatas] = useState([])
  const [unidadesOrigem, setUnidadesOrigem] = useState([])
  const [solicitantes, setSolicitantes] = useState([])

  useEffect(() => {
    if (pessoaId) {
      axios.get(`${contants.API_URL}/people/${pessoaId}`)
        .then(resp => {
          setPeople(resp.data)
        })
    } else {

    }
  }, [])

  function loadOptions(inputValue, callback) {
    axios.get(`${contants.API_URL}/procedimento/schedule?descricao=${inputValue}&pessoaId=${pessoaId}`)
      .then(resp => {
        if (resp.data) {
          const data = resp.data.map(p => ({ value: p.id, label: `${p.id} - ${p.descricao}`, ...p }))
          callback(data)
          setProcedimentos(data)
        }
      })
  }

  const handleInputChange = (newValue) => {
    setProcedimento(newValue)
    axios.get(`${contants.API_URL}/profissinoal-vs-procedimento/${newValue.id}`)
      .then(resp => {
        if (resp.data) {
          const data = resp.data.map(p => ({ value: p.id, label: `${p.id} - ${p.nome}`, ...p }))
          setProfissionais(data)
        }
      })
  }

  const handleProfissionalChange = (newValue) => {
    setProfissional(newValue)
    axios.get(`${contants.API_URL}/estabelecimento-vs-profissinoal-vs-procedimento/${procedimento.id}/${newValue.id}/`)
      .then(resp => {
        if (resp.data) {
          const data = resp.data.map(p => ({ value: p.id, label: `${p.id} - ${p.nome}`, ...p }))
          setEstabelecimentos(data)
        }
      })
  }

  const handleEstabelecimentoChange = (newValue) => {
    setEstabelecimento(newValue)
    axios.get(`${contants.API_URL}/oferta/datas/${people.id}/${procedimento.id}/${profissional.id}/${newValue.id}`)
      .then(resp => {
        if (resp.data) {
          // const data = resp.data.map(p => ({ value: p.id, label: `${p.id} - ${p.nome}` }))
          // setDatas(data)
        }
      })
  }

  return (
    <>
      <div className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Agendamento</h1>
            </div>  
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <strong>Nome completo</strong>
                  <p className="text-muted">{people.nome}</p>
                </div>
                <div className="col-sm-6 col-md-3">
                  <strong>Nome completo</strong>
                  <p className="text-muted">{people.nome}</p>
                </div>
                <div className="col-sm-6 col-md-3">
                  <strong>CPF</strong>
                  <p className="text-muted"><Normalize type="cpf" value={people.cpf} /></p>
                </div>
                <div className="col-sm-6 col-md-3">
                  <strong>Cartão SUS</strong>
                  <p className="text-muted">{people.cartaosus}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <strong>Nome da mãe</strong>
                  <p className="text-muted">{people.nomemae}</p>
                </div>
                <div className="col-sm-6 col-md-3">
                  <strong>Nome do pai</strong>
                  <p className="text-muted">{people.nomepai}</p>
                </div>
                <div className="col-sm-6 col-md-3">
                  <strong>Data de nascimento</strong>
                  <p className="text-muted"><Normalize type="date" value={people.nascimento} /></p>
                </div>
                <div className="col-sm-12 col-md-3">
                  <strong>Sexo</strong>
                  <p className="text-muted">{ people.sexo == 'F' ? 'Feminino' : 'Masculino' }</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="procedimentoId">Procedimento</label>
                    <AsyncSelect
                      name="procedimentoId"
                      cacheOptions
                      loadOptions={loadOptions}
                      defaultOptions={procedimentos}
                      onChange={handleInputChange}
                      noOptionsMessage={() => "Digite o nome do procedimento"} 
                      placeholder="Selecione um procedimento"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="profissional">Profissional</label>
                    <Select
                      name="profissional"
                      placeholder="Selecione um profissional"
                      isDisabled={!profissionais.length}
                      onChange={handleProfissionalChange}
                      options={profissionais}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="estabelecimento">Estabelecimento</label>
                    <Select
                      name="estabelecimento"
                      placeholder="Selecione um estabelecimento"
                      isDisabled={!estabelecimentos.length}
                      onChange={handleEstabelecimentoChange}
                      options={estabelecimentos}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="data">Data de atendimento</label>
                    <Select
                      name="data"
                      placeholder="Selecione uma data"
                      isDisabled={true}
                      options={datas}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="unidadeOrigem">Unidade de origem</label>
                    <Select
                      name="unidadeOrigem"
                      placeholder="Selecione a unidade de origem"
                      isDisabled={true}
                      options={unidadesOrigem}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="solicitante">Profissional solicitante</label>
                    <Select
                      name="solicitante"
                      placeholder="Selecione um profissional solicitante"
                      isDisabled={true}
                      options={solicitantes}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <textarea rows={4} className="form-control"></textarea>
                </div>
              </div>
            </div>
            <div className="card-footer">
                <Link to="/people" className="btn btn-danger btn-sm">
                  <i className="fas fa-arrow-left"></i> &nbsp;
                  Voltar
                </Link>

                <button type="submit" className="btn btn-primary float-right btn-sm">
                  <i className="fas fa-calendar"></i> &nbsp; Agendar
                </button>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ScheduleProcedimento