const mongoose = require('mongoose');

const calendarSchema = mongoose.Schema({
  title: { type: String, required: true },
    start:{type: String, require: true},
   end:{type: String, require: true},
   userid:{ type: String,required: true}
});

module.exports = mongoose.model('calendar', calendarSchema);