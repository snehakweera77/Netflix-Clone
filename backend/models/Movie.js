const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    poster: { type: String },
    img: { type: String },
    trailer: { type: String },
    year: { type: String },
    limit: { type: Number, default: 14 },
    duration: { type: String },
    genres: { type: Array },
    isSeries: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
