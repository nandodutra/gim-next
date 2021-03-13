import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pushMenu } from '../template/templateActions'

const Header = props => (
  <div className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="/#" className="nav-link" data-widget="pushmenu" onClick={props.pushMenu}>
          <i className="fas fa-bars"></i>
        </a>
      </li>
    </ul>

    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <a href="/#"
        className="nav-link" 
        data-toggle="dropdown"
        aria-expanded="false">
          <i className="far fa-comments"></i>
          <span className="badge badge-danger navbar-badge">3</span>
        </a>
      </li>
    </ul>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({ pushMenu }, dispatch)

export default connect(null, mapDispatchToProps)(Header);