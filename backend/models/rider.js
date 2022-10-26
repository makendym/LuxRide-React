const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const riderSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const rider = mongoose.model('rider', riderSchema);

module.exports = rider;