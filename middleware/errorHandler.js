const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  //if we have status code then send that status code otherwise send code as 500
  res.json({ message: err.message });
};

module.exports = errorHandler;
