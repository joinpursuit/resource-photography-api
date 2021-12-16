const photographerModel = require("../models/photographers.model");

function validate(req, _res, next) {
  const { preferred_name, surname, unsplash_profile_url } = req.body;

  const errors = [];
  if (!preferred_name) errors.push("`preferred_name` key is required.");
  if (!surname) errors.push("`surname` key is required.");
  if (!unsplash_profile_url) {
    errors.push("`unsplash_profile_url` key is required.");
  }

  if (errors.length) {
    return next({
      status: 422,
      errors,
    });
  }

  next();
}

async function create(req, res, next) {
  try {
    const payload = await photographerModel.create(req.body);
    res.locals = {
      status: 201,
      payload,
    };
    next();
  } catch (error) {
    next({
      errors: [error],
    });
  }
}

module.exports = { validate, create };
