const router = require("express").Router();
const plantRoutes = require("./plants");

// Plant routes
router.use("/plants", plantRoutes);

module.exports = router;
