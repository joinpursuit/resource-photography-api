const photographModel = require("@models/photographs.model");

async function getAll(_req, res, next) {
  try {
    const payload = await photographModel.getAll();
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
    const payload = await photographModel.create(req.body);
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
    const [payload] = await photographModel.update(req.body);
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
    const [payload] = await photographModel.destroy(res.locals.payload.id);
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
  const { direct_url, unsplash_url, photographer_id } = req.body;

  const errors = [];
  if (!direct_url) errors.push("`direct_url` key is required.");
  if (!unsplash_url) errors.push("`unsplash_url` key is required.");
  if (!photographer_id) {
    errors.push("`photographer_id` key is required.");
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
  const [payload] = await photographModel.getOne(id);

  if (!payload) {
    return next({
      status: 404,
      errors: [`Photograph with ID of ${id} could not be found.`],
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
