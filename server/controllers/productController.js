// ============================================================
// server/controllers/productController.js
// Handles all product-related business logic
// Reads from JSON mock data (no DB required)
// ============================================================

const products = require('../data/products.json');

// ─── GET /api/products ────────────────────────────────────
// Supports: ?q=, ?category=, ?minPrice=, ?maxPrice=, ?sort=
const getAllProducts = (req, res) => {
  try {
    let result = [...products];

    const { q, category, minPrice, maxPrice, sort } = req.query;

    // Full-text search across name, brand, category, tags
    if (q && q.trim()) {
      const query = q.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.includes(query))
      );
    }

    // Filter by category
    if (category && category.trim()) {
      result = result.filter((p) =>
        p.category.toLowerCase().includes(category.trim().toLowerCase())
      );
    }

    // Filter by price range
    if (minPrice) {
      const min = parseFloat(minPrice);
      if (!isNaN(min)) result = result.filter((p) => p.price >= min);
    }
    if (maxPrice) {
      const max = parseFloat(maxPrice);
      if (!isNaN(max)) result = result.filter((p) => p.price <= max);
    }

    // Sorting
    const sortMap = {
      price_asc:  (a, b) => a.price - b.price,
      price_desc: (a, b) => b.price - a.price,
      rating:     (a, b) => b.rating - a.rating,
      discount:   (a, b) => b.discount - a.discount,
      reviews:    (a, b) => b.reviews - a.reviews,
    };
    if (sort && sortMap[sort]) result.sort(sortMap[sort]);

    // Extract unique categories for UI filters
    const categories = [...new Set(products.map((p) => p.category))];

    res.status(200).json({
      success: true,
      count: result.length,
      categories,
      data: result,
    });
  } catch (error) {
    console.error('getAllProducts error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch products' });
  }
};

// ─── GET /api/products/:id ────────────────────────────────
const getProductById = (req, res) => {
  try {
    const product = products.find((p) => p.id === req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product with id "${req.params.id}" not found`,
      });
    }

    // Build "similar products" list: same category, exclude self
    const similar = products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);

    res.status(200).json({
      success: true,
      data: product,
      similar,
    });
  } catch (error) {
    console.error('getProductById error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch product' });
  }
};

module.exports = { getAllProducts, getProductById };
