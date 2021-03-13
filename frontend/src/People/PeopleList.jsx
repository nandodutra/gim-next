import React from 'react'
import { Link } from 'react-router-dom'
import Normalize from '../common/normalize'

const PeopleList = props => {
  const rows = props.rows || []
  return (
    <>
    { rows.length ? (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Resultado</h3>
      </div>
      <div className="card-body table-responsive p-0">
        <table className="table table-hover text-nowrap">
          <thead>
            <tr>
              <th width="30">#</th>
              <th width="35%">Nome completo</th>
              <th>CPF</th>
              <th>Cartão SUS</th>
              <th>Data de nascimento</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>

            { rows.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.nome}</td>
                <td><Normalize type="cpf" value={row.cpf} /></td>
                <td>{row.cartaosus}</td>
                <td><Normalize type="date" value={row.nascimento} /></td>
                <td className="text-center">
                  <Link to={`/people/${row.id}`} className="btn btn-link btn-xs" aria-label="Editar" title="Editar">
                    <i className="fas fa-edit"></i>
                  </Link>
                  <Link to={`/people/show/${row.id}`} className="btn btn-link btn-xs" aria-label="Visualizar" title="Visualizar">
                    <i className="fas fa-eye"></i>
                  </Link>

                  <Link to={`/schedule/${row.id}`} className="btn btn-link btn-xs" aria-label="Agendar" title="Agendar">
                    <i className="fas fa-calendar-alt"></i>
                  </Link>
                </td>
              </tr>
            )) }

          </tbody>
        </table>
      </div>
    </div>) : null }
    </>
  )
}

export default PeopleList