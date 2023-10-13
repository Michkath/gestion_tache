const mongoose = require('mongoose');

const tacheSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  echeance:{type: Date, require: true}
});

module.exports = mongoose.model('Tache', tacheSchema);