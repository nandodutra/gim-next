import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import contants from '../consts'
import phone from '../common/normalize/phone'
import cpf from '../common/normalize/cpf'
import cep from '../common/normalize/cep'
import { toastr } from 'react-redux-toastr'
import { getPeopleById } from './PeopleActions'

let PeopleRegisterForm = props => {
  const { cidadeId } = props
  const { id } = useParams();
  const { handleSubmit } = props
  const [bairros, setBairros] = useState([])

  useEffect(() => {
    if (id) {
      props.getPeopleById(id)
    }
  }, [])

  useEffect(() => {
    if (cidadeId) {
      axios.get(`${contants.API_URL}/bairro?cidadeId=${cidadeId}`)
        .then(resp => {
          setBairros(resp.data)
        }, (error) => {

        })
    }
  }, [cidadeId])

  return (
    <>
      <div className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">
              {/* <h1 className="m-0 text-dark">Cadastro de pessoa</h1> */}
            </div>  
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="card card-info">
              <div className="card-header">
                <h3 className="card-title">Cadastro de pessoa</h3>
              </div>
              <div className="card-body">

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="nome">Nome completo</label>
                      <Field name="nome" id="nome" component="input" className="form-control" required={true} autoComplete="off" autoCorrect="off" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="nomemae">Nome da mãe</label>
                      <Field name="nomemae" id="nomemae" component="input" className="form-control" required={true} autoComplete="off" autoCorrect="off" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="nomepai">Nome do pai</label>
                      <Field name="nomepai" id="nomepai" component="input" className="form-control" autoComplete="off" autoCorrect="off" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="nascimento">Data de nascimento</label>
                      <Field name="nascimento" id="nascimento" component="input" type="date" className="form-control" required={true} autoComplete="off" autoCorrect="off" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="sexo">Sexo</label>
                      <Field name="sexo" id="sexo" component="select" className="custom-select" required={true}>
                        <option value=""></option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                      </Field>
                    </div>
                  </div>
                </div>

                <h5 className="mt-4 mb-2">Endereço</h5>

                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="cep">CEP</label>
                      <Field name="cep" id="cep" component="input" className="form-control" required={true} autoComplete="off" autoCorrect="off" normalize={cep} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lograd">Logradouro</label>
                      <Field name="lograd" id="lograd" component="input" className="form-control" required={true} autoComplete="off" autoCorrect="off" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="num">Número</label>
                      <Field name="num" id="num" component="input" className="form-control" required={true} autoComplete="off" autoCorrect="off" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="compl">Complemento</label>
                      <Field name="compl" id="compl" component="input" className="form-control" autoComplete="off" autoCorrect="off" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="cidade">Cidade</label>
                      <Field name="cidadeId" id="cidadeId" component="select" className="custom-select" required={true}>
                        <option value=""></option>
                        <option value="80">TEIXEIRA DE FREITAS</option>
                      </Field>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="bairroId">Bairro</label>
                      <Field name="bairroId" id="bairro" component="select" className="custom-select" required={true}>
                        
                        <option value=""></option>
                        { bairros.map(bairro => (
                          <option key={bairro.id} value={bairro.id}>{bairro.nome}</option>
                        )) }
                      </Field>
                    </div>
                  </div>
                </div>

                <h5 className="mt-4 mb-2">Telefones</h5>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="telefone">Telefone celular</label>
                      <Field name="telefone" id="telefone" component="input" className="form-control" required={true} normalize={phone} autoComplete="off" autoCorrect="off" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="telefone2">Telefone fixo</label>
                      <Field name="telefone2" id="telefone2" component="input" className="form-control" normalize={phone} autoComplete="off" autoCorrect="off" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="telefone3">Telefone de contato</label>
                      <Field name="telefone3" id="telefone3" component="input" className="form-control" normalize={phone} autoComplete="off" autoCorrect="off" />
                    </div>
                  </div>
                </div>

                <h5 className="mt-4 mb-2">Documentos</h5>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="identidade">Identidade</label>
                      <Field name="identidade" id="identidade" component="input" className="form-control" required={true} autoComplete="off" autoCorrect="off" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="cpf">CPF</label>
                      <Field name="cpf" id="cpf" component="input" className="form-control" required={true} normalize={cpf} autoComplete="off" autoCorrect="off" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="cartaosus">Cartão SUS</label>
                      <Field name="cartaosus" id="cartaosus" component="input" className="form-control" required={true} autoComplete="off" autoCorrect="off" maxLength={15} minLength={15} />
                    </div>
                  </div>
                </div>

              </div>
              <div className="card-footer">
                <Link to="/people" className="btn btn-danger btn-sm">
                  <i className="fas fa-arrow-left"></i> &nbsp;
                  Voltar
                </Link>

                <button type="submit" className="btn btn-primary float-right btn-sm">
                  <i className="fas fa-save"></i> &nbsp; { props.id ? `Atualizar cadastro` : `Salvar cadastro` }
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

PeopleRegisterForm = reduxForm({ form: 'PeopleRegisterForm', enableReinitialize: true })(PeopleRegisterForm)

const selector = formValueSelector('PeopleRegisterForm')
const mapStateToProps = state => ({ initialValues: state.people, cidadeId: selector(state, 'cidadeId'), id: selector(state, 'id') })

const mapDispatchToProps = dispatch => bindActionCreators({ getPeopleById }, dispatch)

PeopleRegisterForm = connect(mapStateToProps, mapDispatchToProps)(PeopleRegisterForm)

const PeopleRegister = props => {
  const history = useHistory();

  const submit = values => {
    if (values && values.id) {
      axios.put(`${contants.API_URL}/people/${values.id}`, values)
        .then(resp => {
          toastr.success('Sucesso!', 'Cadastro atualizado com sucesso.')
          history.push('/people')
        })
        .catch(e => {
          e.response.data.forEach(err => toastr.error('Erro', err.message))
        });
    } else {
      axios.post(`${contants.API_URL}/people`, values)
        .then(resp => {
          toastr.success('Sucesso!', 'Cadastro realizado com sucesso.')
          history.push('/people')
        })
        .catch(e => {
          e.response.data.forEach(err => toastr.error('Erro', err.message))
        });
    }
  }

  return (
    <PeopleRegisterForm onSubmit={submit} />
  )
}

export default PeopleRegister