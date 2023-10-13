const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true  },
  Name: { type: String, required: true },
  password: { type: String, required: true },
},
{
    timestamps: true,
}
);
UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);