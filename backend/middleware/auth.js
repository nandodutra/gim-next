const jwt = require('jsonwebtoken')

const Auth = (req, res, next) => {
  if (req.method === 'options') {
    next()
  } else {
    const token = req.body.token || req.query.token || req.headers['authorization']
    
    if (!token) {
      return res.status(403).send([{ message: 'To token provided.' }])
    }

    jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
      if (err) {
        res.status(403).send([{ message: 'Token invállido.' }])
      } else {
        req.user = decoded
        next()
      }
    })
  }
}

module.exports = Auth;