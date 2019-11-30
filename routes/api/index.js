const router = require("express").Router();
const plantRoutes = require("./plants");
const feedRoutes = require("./feed");

// Plant routes
router.use("/plants", plantRoutes);
router.use("/feed", feedRoutes);

module.exports = router;
