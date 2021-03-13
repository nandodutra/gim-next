import axios from 'axios'
import React from 'react'
import PeopleList from "../People/PeopleList"
import PeopleSearchForm from "../People/PeopleSearchForm"
import consts from '../consts'

class Schedule extends React.Component {
  constructor(props) {
    super(props)

    this.state = { rows: [] }
  }

  submit = (values) => {
    const query = Object.keys(values).map((key) => `${key}=${values[key]}`).join('&')
    axios.get(`${consts.API_URL}/people?${query}`)
      .then(resp => {
        this.setState({ ...this.state, rows: resp.data })
      })
  }

  render() {
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
            <PeopleSearchForm onSubmit={this.submit} />
  
            <PeopleList rows={this.state.rows} />
          </div>
        </section>
      </>
    )
  }
}

export default Schedule