const errorHandler = (error, _req, res, _next) => {
  const { status = 500, errors = ["Something went wrong."] } = error;
  res.status(status).send({
    status,
    errors,
  });
};

const notFoundHandler = (req, _res, next) => {
  if (req.payload) return next();

  const error = `${req.method} ${req.path} is not a valid route.`;
  next({
    status: 404,
    errors: [error],
  });
};

module.exports = { errorHandler, notFoundHandler };
