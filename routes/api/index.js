const router = require("express").Router();
const plantRoutes = require("./plants");

// Book routes
router.use("/plants", plantRoutes);

module.exports = router;
