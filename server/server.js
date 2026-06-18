// ============================================================
// server/server.js
// Entry point for the Opura AI Shopping Assistant Express API
// ============================================================

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const productRoutes = require('./routes/products');
const chatRoutes    = require('./routes/chat');
const compareRoutes = require('./routes/compare');

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ────────────────────────────────────────────
app.use(cors());                      // Allow cross-origin requests from React dev server
app.use(express.json());              // Parse incoming JSON bodies
app.use(morgan('dev'));               // Log every request to console for debugging

// ─── API Routes ───────────────────────────────────────────
app.use('/api/products', productRoutes);
app.use('/api/chat',     chatRoutes);
app.use('/api/compare',  compareRoutes);

// ─── Health Check ─────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Opura AI Shopping Assistant API is running 🚀',
    version: '1.0.0',
    endpoints: {
      products:       'GET  /api/products',
      productById:    'GET  /api/products/:id',
      chat:           'POST /api/chat',
      compare:        'POST /api/compare',
    },
  });
});

// ─── 404 Handler ──────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// ─── Global Error Handler ─────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// ─── Start Server ─────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n✅  Server running at http://localhost:${PORT}`);
  console.log(`📦  Products  → http://localhost:${PORT}/api/products`);
  console.log(`💬  Chat      → http://localhost:${PORT}/api/chat`);
  console.log(`⚖️   Compare   → http://localhost:${PORT}/api/compare\n`);
});
