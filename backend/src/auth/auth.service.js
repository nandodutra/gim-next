const jwt = require('jsonwebtoken')
const btoa = require('btoa')
const { DateTime } = require('luxon')
const User = require('../../models/user')
const Logar = require('../../models/logar')
const contants = require('../../config/consts')

class AuthService {
  async signIn({ username, password }) {
    const invalidUserError = { status: 403, data: [{ message: 'Informe usuário e senha.' }] }

    if (!username || !password) {
      return invalidUserError
    }
  
    const user = await User.findOne({ where: { login: username } })
  
    if (!user) {
      return invalidUserError
    }
  
    if (user.senha != btoa(password)) {
      return invalidUserError
    }

    // Verifica se o regulador liberou o acesso no dia atual
    if (user.tipoUsuario === contants.USER.TIPO_USUARIO.MARCADOR) {
      const logar = await Logar.findOne({ where: { dia: DateTime.now().toISODate() } })
      
      if (!logar) {
        return { status: 403, data: [{ message: 'O sistema não está liberado para uso na data de hoje, contante o regulador.' }] }
      }
    }

    const usuarioPayload = { 
      id: user.id, 
      estabelecimento_id: user.estabelecimento_id, 
      nome: user.Nome,
      email: user.email,
      login: user.login,
      status: user.status,
      tipoUsuario: user.tipoUsuario,
      horario_login_inicio: user.horario_login_inicio,
      horario_login_final: user.horario_login_final
    }

    const token = await jwt.sign(usuarioPayload, process.env.JWT_TOKEN, {
      expiresIn: parseInt(process.env.JWT_TOKEN_EXPIRATION_TIME)
    })

    if (token) {
      return { status: 200, data: { token, user: usuarioPayload } }
    } else {
      return { status: 403, data: { token, user: usuarioPayload } }
    }
  }

  async checkToken(token) {
    try {
      const dataToken = jwt.verify(token, process.env.JWT_TOKEN);

      return dataToken ? true : false
    } catch(error) {
      return false
    }
  }
}

module.exports = new AuthService()