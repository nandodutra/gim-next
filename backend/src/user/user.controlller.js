const User = require('../../models/user')

const findAll = async (req, res) => {
  const users = await User.findAll()
  
  res.send({ users })
}

module.exports = { findAll }