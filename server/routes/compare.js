// ============================================================
// server/routes/compare.js
// Route: POST /api/compare
// ============================================================

const express = require('express');
const router  = express.Router();
const { compareProducts } = require('../controllers/compareController');

// Add this block
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Compare route working'
  });
});

// POST /api/compare
// Body: { "ids": ["1", "2", "3"] }
router.post('/', compareProducts);

module.exports = router;
