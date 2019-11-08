var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/api/health', function(req, res, next) {
  res.json({
    app: "project-3",
    health: 200
  });
});

router.get('/api/cheese/:id', (req, res) => {
  console.log('requested cheese id:', req.params.id);
  res.json({
    name: "Humboldt Fog",
    price: 1500,
    description: "Only the foggiest!"
  });
});

/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

module.exports = router;
