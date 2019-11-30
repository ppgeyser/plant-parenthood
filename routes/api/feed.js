const router = require("express").Router();
const feedController = require("../../controllers/feedController");

// Matches with "/api/feed"
router.route("/")
  .post(feedController.create)
  .get(feedController.findAll);

// Matches with "/api/feed/:id"
router
  .route("/:id")
  .get(feedController.findById)
  .put(feedController.update)
  .delete(feedController.remove);

module.exports = router;