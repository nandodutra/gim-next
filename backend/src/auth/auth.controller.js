const AuthService = require('./auth.service')

const signIn = async (req, res) => {
  const { username, password } = req.body;

  const AuthUser = await AuthService.signIn({ username, password })

  res.status(AuthUser.status).send(AuthUser.data)
}

const checkToken = async (req, res) => {
  const token = req.body.token;

  const isValid = await AuthService.checkToken(token)

  res.status(200).send({ valid: isValid })
}

module.exports = { signIn, checkToken }