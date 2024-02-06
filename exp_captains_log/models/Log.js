const mongoose = require("mongoose");
const model = mongoose.model;

const logSchema = new mongoose.Schema(
  {
    title: String,
    entry: String,

    shipIsBroken: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Log = model("Log", logSchema);
module.exports = Log;
