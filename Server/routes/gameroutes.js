const express = require('express');
const router = express.Router();

// Define your game routes here
router.get('/', (req, res) => {
  res.send('Tic Tac Toe API');
});

module.exports = router;