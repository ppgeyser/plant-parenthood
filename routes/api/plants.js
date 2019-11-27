const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");

// Matches with "/api/plants"
router.route("/")
  .post(plantsController.create);

router.route("/user/:id")
  .get(plantsController.findAll);

// Matches with "/api/plants/:id"
router
  .route("/:id")
  .get(plantsController.findById)
  .put(plantsController.update)
  .delete(plantsController.remove);

module.exports = router;
