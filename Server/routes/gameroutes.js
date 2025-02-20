const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 5000;

// Define your game routes here
router.get('/', (req, res) => {
  res.send('Tic Tac Toe API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = router;