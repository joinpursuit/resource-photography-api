function responseHandler(_req, res, _next) {
  const { status, payload } = res.locals;
  res.status(status).send({ success: true, payload });
}

module.exports = { responseHandler };
