var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: { type: String, required: true },
  textContent: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Article", articleSchema);
