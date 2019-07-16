module.exports = (req, res, next) => {
  const err = new Error('r u lost tho');
  err.status = 404;
  next(err);
};
