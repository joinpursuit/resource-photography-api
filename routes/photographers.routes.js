const router = require("express").Router();
const controller = require("../controllers/photographers.controller");

router.post("/", controller.validate, controller.create);

module.exports = router;
