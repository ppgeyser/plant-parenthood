const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");

// Matches with "/api/books"
router.route("/")
  .get(plantsController.findAll)
  .post(plantsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(plantsController.remove);

module.exports = router;
