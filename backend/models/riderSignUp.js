const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const signUpSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: false },
  dob:{type: Date, required: false},

}, {
    timestamps: true,
});

const signUp = mongoose.model('signUp', signUpSchema);
module.exports = signUp;
