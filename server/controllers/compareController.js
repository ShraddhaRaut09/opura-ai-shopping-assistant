// ============================================================
// server/controllers/compareController.js
// Handles side-by-side product comparison logic
// Accepts 2–3 product IDs, returns structured comparison data
// ============================================================

const products = require('../data/products.json');

// ─── Fields used in the comparison table ─────────────────
// Each field has a label (shown in UI) and a getter function
const COMPARE_FIELDS = [
  { key: 'brand',         label: 'Brand',           get: (p) => p.brand },
  { key: 'category',      label: 'Category',        get: (p) => p.category },
  { key: 'price',         label: 'Price (₹)',        get: (p) => `₹${p.price.toLocaleString()}` },
  { key: 'originalPrice', label: 'Original Price',  get: (p) => `₹${p.originalPrice.toLocaleString()}` },
  { key: 'discount',      label: 'Discount',        get: (p) => `${p.discount}% OFF` },
  { key: 'rating',        label: 'Rating',          get: (p) => `${p.rating} ⭐ (${p.reviews.toLocaleString()} reviews)` },
  { key: 'sizes',         label: 'Available Sizes', get: (p) => p.sizes.join(', ') },
  { key: 'colors',        label: 'Colors',          get: (p) => p.colors },        // array — UI renders swatches
  { key: 'features',      label: 'Key Features',    get: (p) => p.features },      // array — UI renders list
  { key: 'inStock',       label: 'Availability',    get: (p) => (p.inStock ? 'In Stock ✅' : 'Out of Stock ❌') },
];

// ─── POST /api/compare ────────────────────────────────────
const compareProducts = (req, res) => {
  try {
    const { ids } = req.body;

    // ── Validate input ──
    if (!ids || !Array.isArray(ids)) {
      return res.status(400).json({
        success: false,
        message: 'Field "ids" must be an array of product IDs',
        example: { ids: ['1', '2', '3'] },
      });
    }

    if (ids.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Provide at least 2 product IDs to compare',
      });
    }

    if (ids.length > 3) {
      return res.status(400).json({
        success: false,
        message: 'You can compare a maximum of 3 products at a time',
      });
    }

    // ── Resolve products from IDs ──
    const resolved = ids.map((id) => products.find((p) => p.id === String(id)));
    const notFound  = ids.filter((id, i) => !resolved[i]);

    if (notFound.length > 0) {
      return res.status(404).json({
        success: false,
        message: `Products not found for IDs: ${notFound.join(', ')}`,
      });
    }

    // ── Build comparison table rows ──
    // Each row: { key, label, values: [val_for_product1, val_for_product2, ...] }
    const table = COMPARE_FIELDS.map((field) => ({
      key:    field.key,
      label:  field.label,
      values: resolved.map((p) => field.get(p)),
    }));

    // ── Highlight best value for numeric fields ──
    // Returns index of the "winner" for price (lowest) and rating/discount (highest)
    const highlight = {
      bestPrice:    resolved.indexOf(resolved.reduce((a, b) => (a.price < b.price ? a : b))),
      bestRating:   resolved.indexOf(resolved.reduce((a, b) => (a.rating > b.rating ? a : b))),
      bestDiscount: resolved.indexOf(resolved.reduce((a, b) => (a.discount > b.discount ? a : b))),
    };

    res.status(200).json({
      success: true,
      count: resolved.length,
      data: {
        products: resolved,    // Full product objects (for header row with images)
        table,                 // Structured rows for the comparison table
        highlight,             // Index hints for UI to colour-code the best values
      },
    });
  } catch (error) {
    console.error('compareProducts error:', error.message);
    res.status(500).json({ success: false, message: 'Comparison failed' });
  }
};

module.exports = { compareProducts };
