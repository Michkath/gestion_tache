const mongoose = require('mongoose');

const calendarSchema = mongoose.Schema({
  title: { type: String, required: true },
    start:{type: Date, require: true},
   end:{type: Date, require: true}

});

module.exports = mongoose.model('calendar', calendarSchema);