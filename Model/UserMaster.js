const mongoose = require("mongoose");
const UserMasterSchema = new mongoose.Schema({

  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  mobile: {
    type: Number,
    require: true
  },
  role: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }

});

const UserMasterModel = mongoose.model("usermaster", UserMasterSchema);
module.exports = UserMasterModel;
