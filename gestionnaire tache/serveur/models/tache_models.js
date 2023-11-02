const mongoose = require('mongoose');

const tacheSchema = mongoose.Schema({
   userid:{ type: String,required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  echeance:{type: Date, require: true}
});

module.exports = mongoose.model('Tache', tacheSchema);