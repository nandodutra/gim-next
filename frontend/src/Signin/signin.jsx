import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from './signinActions'
import Messages from '../common/template/message'
import InputIcon from '../common/form/inputIcon'

class Signin extends React.Component {
  onSubmit(values) {
    const { login } = this.props
    login(values)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div className="login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="/"><b>App</b>Marcador</a>
          </div>
      
          <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
      
            <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
              <Field 
                component={InputIcon}
                placeholder="Usuário"
                type="text"
                name="username"
                icon="user" />
      
              <Field 
                component={InputIcon}
                placeholder="Senha"
                name="password"
                type="password"
                icon="lock" />
              
              
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                      Lembre-me
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                </div>
              </div>
            </form>
      
            {/* <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
              </a>
            </div> */}
      
            {/* <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">Register a new membership</a>
            </p> */}
          </div>
        </div>
      </div>
        <Messages />
    </div>
  )}
}

Signin = reduxForm({ form: 'signinForm' })(Signin) 
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
export default connect(null, mapDispatchToProps)(Signin)