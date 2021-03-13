import '../common/template/dependencies'
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from './app'
import Auth from '../Signin/signin'
import { validateToken } from '../Signin/signinActions'

class AuthOrApp extends Component {
  UNSAFE_componentWillMount() {
    const auth = this.props.auth;
    if (auth.user) {
      this.props.validateToken(auth.user.token)
    }
  }

  render() {
    const { user, validToken } = this.props.auth

    if (user && validToken) {
      axios.defaults.headers.common['authorization'] = user.token
      return <App>{this.props.children}</App>
    } else if (!user && !validToken) {
      return <Auth />
    } else {
      return false
    }
  }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken },
  dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)