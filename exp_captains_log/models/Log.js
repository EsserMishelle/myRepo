const mongoose = require("mongoose");
const model = mongoose.model;

const logSchema = new mongoose.Schema(
  {
    title: String,
    entry: String,

    shipIsBroken: { type: Boolean, default: true },
  },
  { timestamp: true }
);

//   depart_dateTime: {
//     type: Date,
//     required: true,
//     default: () => {
//       const oneYearLater = new Date();
//       oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
//       return oneYearLater;
//     },
//     // default: () => Date.now() + 365 * 24 * 60 * 60000,
//   }, ////365*24 hours * 60 min * 60 sec * 1000 miliisecond

//   destinations: [
//     {
//       arrive_airport: String,
//       arrive_dateTime: Date,
//     },
//   ],
// });

const Log = model("Log", logSchema);
module.exports = Log;
