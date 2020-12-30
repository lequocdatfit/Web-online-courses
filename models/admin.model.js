const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
  _id: mongoose.ObjectId,
  namelogin: { type: String, required: true },
  fullname: { String },
  password: { type: String, required: true },
  email: String,
  phone: String,
  avatar: String,
  date_created: { type: Date, default: Date.now },
});

const Admin = mongoose.model('Admin', schema, 'Admin');

module.exports = {
  load() {

  }
}