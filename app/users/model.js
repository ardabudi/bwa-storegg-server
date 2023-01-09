const mongoose = require('mongoose')

let usersSchema = mongoose.Schema({
  email: {
    type: String,
    require: [true, 'email harus diisi']
  },
  name: {
    type: String,
    require: [true, 'nama harus diisi']
  },
  password: {
    type: String,
    require: [true, 'kata sandi harus diisi']
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'admin'
  },
  status: {
    type: String,
    enum: ['Y', 'N'],
    default: 'Y'
  },
  phoneNumber: {
    type: String,
    require: [true, 'nomor telpon harus diisi']
  },
}, { timesTamps: true })

module.exports = mongoose.model('User', usersSchema)
