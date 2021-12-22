const photographerModel = require("@models/photographers.model");

async function getAll(_req, res, next) {
  try {
    const payload = await photographerModel.getAll();
    res.locals = {
      status: 200,
      payload,
    };
    next();
  } catch (error) {
    next({
      errors: [error],
    });
  }
}

function getOne(_req, res, next) {
  try {
    res.locals = {
      status: 200,
      payload: res.locals.payload,
    };
    next();
  } catch (error) {
    next({
      errors: [error],
    });
  }
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

async function update(req, res, next) {
  try {
    const [payload] = await photographerModel.update(req.body);
    res.locals = {
      status: 200,
      payload,
    };
    next();
  } catch (error) {
    next({
      errors: [error],
    });
  }
}

async function destroy(req, res, next) {
  try {
    const [payload] = await photographerModel.destroy(res.locals.payload.id);
    res.locals = {
      status: 200,
      payload,
    };
    next();
  } catch (error) {
    next({
      errors: [error],
    });
  }
}

// Helpers
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

async function findById(req, res, next) {
  const id = req.params.id;
  const [payload] = await photographerModel.getOne(id);

  if (!payload) {
    return next({
      status: 404,
      errors: [`Photographer with ID of ${id} could not be found.`],
    });
  }

  res.locals.payload = payload;
  next();
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy,
  validate,
  findById,
};
