// routes/page1.js
const express = require('express');
const router = express.Router();

// Define the top-level page1 route
router.get('/', (req, res) => {
  res.render('page1', { title: 'About Me' });
});



module.exports = router;
