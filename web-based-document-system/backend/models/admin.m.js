const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  UserID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = mongoose.model("admins", adminSchema);
