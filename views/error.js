const errorHandler = (error, _req, res, _next) => {
  const { status = 500, errors = ["Something went wrong."] } = error;
  res.status(status).send({
    success: false,
    errors,
  });
};

const notFoundHandler = (req, res, next) => {
  const isEmpty = !Object.keys(res.locals).length;
  if (!isEmpty) return next();

  const error = `${req.method} ${req.path} is not a valid route.`;
  next({
    status: 404,
    errors: [error],
  });
};

module.exports = { errorHandler, notFoundHandler };
