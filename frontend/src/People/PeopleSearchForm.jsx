import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

let PeopleSearchForm = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Busca de pacientes</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-3">
                  <div className="form-group">
                    <label htmlFor="searchType">Tipo de pesquisa</label>
                    <Field className="custom-select" id="searchType" name="searchType" component="select">
                      <option value="nome">Nome da pessoa</option>
                      <option value="nomemae">Nome da mãe</option>
                      <option value="cpf">CPF</option>
                      <option value="cartaosus">Cartão do SUS</option>
                      <option value="pispasep">PIS/PASEP</option>
                      <option value="identidade">Identidade</option>
                      <option value="ctps">Carteira de Trabalho</option>
                      <option value="titulo">Título de Eleitor</option>
                    </Field>
                  </div>
                </div>
                <div className="col-9">
                  <div className="form-group">
                    <label htmlFor="searchValue">Informação da pesquisa</label>
                    <Field name="searchValue" id="searchValue" className="form-control" component="input" type="text" required={true} minLength={3} />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <Link to="/people/register" type="button" className="btn btn-sm btn-success">
                <i className="fas fa-plus"></i> &nbsp;
                Cadastrar</Link>

              <button type="submit" className="btn btn-info btn-sm float-right">
                <i className="fas fa-search"></i> &nbsp;
                Pesquisar</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

PeopleSearchForm = reduxForm({ form: 'PeopleSearchForm' })(PeopleSearchForm)

export default PeopleSearchForm