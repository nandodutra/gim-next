import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { bindActionCreators } from 'redux'
import { getPeopleById } from './PeopleActions'
import Normalize from '../common/normalize'
import { Link } from 'react-router-dom'
// import Camera from './Camera'

const PeopleView = props => {
  const { id } = useParams()
  const { getPeopleById, people } = props

  useEffect(() => {
    getPeopleById(id)
  }, [])

  return (
    <>
      <div className="content-header">
        {/* <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Visualizado dados</h1>
            </div>  
          </div>
        </div> */}
      </div>

      <section className="main">
        <div className="container">
          <div className="card card-info">
            <div className="card-header">
              Dados de {people.nome}
            </div>
            <div className="card-body">
              {/* <div className="row">
                <div className="col-md-12">
                  <Camera />
                </div>
              </div> */}

              <div className="row">
                <div className="col-sm-6 col-md-6">
                  <strong>Nome completo</strong>
                  <p className="text-muted">{people.nome}</p>
                </div>
                <div className="col-sm-6 col-md-6">
                  <strong>Nome da mãe</strong>
                  <p className="text-muted">{people.nomemae}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6">
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

              <hr/>
              <h5>Endereço</h5>

              <div className="row">
                <div className="col-sm-4 col-md-4">
                  <strong>CEP</strong>
                  <p className="text-muted"><Normalize type="cep" value={people.cep} /></p>
                </div>
                <div className="col-sm-6 col-md-6">
                  <strong>Logradouro</strong>
                  <p className="text-muted">{people.lograd}</p>
                </div>
                <div className="col-sm-2 col-md-2">
                  <strong>Número</strong>
                  <p className="text-muted">{people.num}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <strong>Bairro</strong>
                  <p className="text-muted">{ people.bairro && people.bairro.nome }</p>
                </div>
                <div className="col-sm-6 col-md-4">
                  <strong>Cidade</strong>
                  <p className="text-muted">{ people.cidade && people.cidade.descricao }</p>
                </div>
                <div className="col-sm-12 col-md-4">
                  <strong>Complemento</strong>
                  <p className="text-muted">{ people.compl || '--' }</p>
                </div>
              </div>

              <hr/>
              <h5>Contatos</h5>

              <div className="row">
                <div className="col-sm-4 col-md-4">
                  <strong>Celular</strong>
                  <p className="text-muted"><Normalize type="phone" value={people.telefone} /></p>
                </div>
                <div className="col-sm-4 col-md-4">
                  <strong>Telefone fixo</strong>
                  <p className="text-muted"><Normalize type="phone" value={people.telefone2} /></p>
                </div>
                <div className="col-sm-4 col-md-4">
                  <strong>Telefone de contato</strong>
                  <p className="text-muted"><Normalize type="phone" value={people.telefone3} /></p>
                </div>
              </div>

              <hr/>
              <h5>Documentos</h5>

              <div className="row">
              <div className="col-sm-4 col-md-4">
                  <strong>Identidade</strong>
                  <p className="text-muted">{people.identidade}</p>
                </div>
                <div className="col-sm-4 col-md-4">
                  <strong>CPF</strong>
                  <p className="text-muted"><Normalize type="cpf" value={people.cpf} /></p>
                </div>
                <div className="col-sm-4 col-md-4">
                  <strong>Cartão SUS</strong>
                  <p className="text-muted">{people.cartaosus}</p>
                </div>
              </div>

            </div>
            <div className="card-footer">
                <Link to="/people" className="btn btn-danger btn-sm">
                  <i className="fas fa-arrow-left"></i> &nbsp;
                  Voltar
                </Link>

                <Link to={ `/people/${people.id}` } className="btn btn-info btn-sm float-right">
                  <i className="fas fa-edit"></i> &nbsp;
                  Editar
                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ getPeopleById }, dispatch)
const mapStateToProps = state => ({ people: state.people })

export default connect(mapStateToProps, mapDispatchToProps)(PeopleView)