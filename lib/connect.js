const { parse } = require('url');

module.exports = () => {
  mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    usefindAndModify: false
  });

  mongoose.connection.on('connected', () => {
    const redactedUrl = `${parsedURL.protocol}://${parsedURL.hostname:${parse}
      console.log('connected to MongoDB at ${url}');
  });
}
;
