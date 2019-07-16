const mongoose = require('mongoose');
const { parse } = require('url');

module.exports = (url = process.env.MONGODB_URI) => {
  mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    usefindAndModify: false
  });

  mongoose.connection.on('connected', () => {
    const parsedUrl = parse(url);
    const redactedUrl = `${parsedUrl.protocol}://${parsedUrl.hostname}:${parsedUrl.pathname}`;
    console.log(`connected to MongoDB at ${redactedUrl}`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });

  mongoose.connection.on('error', () => {
    console.log('Eroor connecting to MongoDB');
  });
};
