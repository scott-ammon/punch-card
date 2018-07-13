const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log("protected route hit");
  res.send("You have accessed the protected route");
});

module.exports = router;