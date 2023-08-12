const mongoose = require('mongoose');

const pfprojectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  decription: { type: String},
  link: { type: String },
  prolink: { type: String },


});

module.exports = mongoose.model('projects', pfprojectSchema);
