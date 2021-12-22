const router = require("express").Router();
const controller = require("@controllers/photographers.controller");

router.get("/", controller.getAll);
router.get("/:id", controller.findById, controller.getOne);
router.post("/", controller.validate, controller.create);
router.put("/:id", controller.validate, controller.findById, controller.update);
router.delete("/:id", controller.findById, controller.destroy);

module.exports = router;
