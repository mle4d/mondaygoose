const mongoose = require('mongoose');

const memaSchema = new mongoose.Schema({
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

const Meme = mongoose.model('Meme', memaSchema);

module.exports = Meme;
