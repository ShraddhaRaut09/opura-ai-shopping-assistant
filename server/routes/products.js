// ============================================================
// server/routes/products.js
// Routes: GET /api/products  |  GET /api/products/:id
// ============================================================

const express = require('express');
const router  = express.Router();
const { getAllProducts, getProductById } = require('../controllers/productController');

// GET /api/products
// Query params: ?q=sneakers  ?category=Running  ?minPrice=2000  ?maxPrice=6000  ?sort=price_asc
router.get('/', getAllProducts);

// GET /api/products/:id
router.get('/:id', getProductById);

module.exports = router;
