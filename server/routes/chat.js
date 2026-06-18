// ============================================================
// server/routes/chat.js
// Route: POST /api/chat
// ============================================================

const express = require('express');
const router  = express.Router();
const { handleChat } = require('../controllers/chatController');

// Add this block
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Chat route working'
  });
});

// POST /api/chat
// Body: { "message": "show me running shoes" }
router.post('/', handleChat);

module.exports = router;
