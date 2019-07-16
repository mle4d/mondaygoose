const mongoose = require('mongoose');

const memaschema = new mongoose.Schema({
  top: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  bottom: {
    type: String,
    required: true
  },
});

const Meme = mongoose.model('Meme', memaschema);

module.exports = Meme;
