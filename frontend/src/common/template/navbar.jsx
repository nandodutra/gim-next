import React from 'react'
import { connect } from 'react-redux'

import {
  Link
} from "react-router-dom";

const Navbar = props => {
  const user = props.auth.user.user.nome
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" className="brand-link">
        <span className="brand-text font-weight-light">App Marcador</span>
      </a>
  
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="https://uifaces.co/our-content/donated/Xp0NB-TL.jpg" className="img-circle elevation-2" alt="Usuário"/>
          </div>
          <div className="info">
            <a href="/" className="d-block">{ user }</a>
          </div>
        </div>
  
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" data-accordion="false">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i> 
                <p>Dashboard</p>  
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/people" className="nav-link">
                <i className="nav-icon fas fa-users"></i> 
                <p>Pessoas</p>  
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/schedule" className="nav-link">
                <i className="nav-icon fas fa-calendar"></i> 
                <p>Agendamento</p>  
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/schedule" className="nav-link">
                <i className="nav-icon fas fa-people-arrows"></i> 
                <p>Demanda reprimida</p>  
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

const mapDispatchToProps = state => ({ auth: state.auth })

export default connect(mapDispatchToProps, null)(Navbar)