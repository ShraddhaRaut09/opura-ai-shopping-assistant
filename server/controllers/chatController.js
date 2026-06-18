const products = require("../data/products.json");

const INTENTS = {
  GREETING: [
    "hi",
    "hello",
    "hey",
    "good morning",
    "good evening",
    "namaste",
  ],

  RUNNING: [
    "run",
    "running",
    "jog",
    "jogging",
    "marathon",
    "sprint",
    "cardio",
  ],

  TRAIL: [
    "trail",
    "hiking",
    "outdoor",
    "trekking",
    "mountain",
  ],

  BASKETBALL: [
    "basketball",
    "nba",
    "court",
    "high-top",
  ],

  CASUAL: [
    "casual",
    "daily",
    "everyday",
    "office",
    "lifestyle",
    "slip",
  ],

  BUDGET: [
    "budget",
    "cheap",
    "affordable",
    "under",
  ],

  PREMIUM: [
    "premium",
    "luxury",
    "best",
    "elite",
  ],

  DISCOUNT: [
    "discount",
    "offer",
    "sale",
    "deal",
  ],

  COMPARE: [
    "compare",
    "vs",
    "versus",
  ],
};

function detectIntent(message) {
  const msg = message.toLowerCase();

  for (const [intent, keywords] of Object.entries(INTENTS)) {
    if (keywords.some((word) => msg.includes(word))) {
      return intent;
    }
  }

  return "SEARCH";
}

function buildResponse(intent, message) {
  switch (intent) {
    case "GREETING":
      return {
        reply:
          "👋 Welcome to Opura AI! Ask me for running shoes, trail shoes, basketball shoes, budget options, discounts and more.",
        products: products.slice(0, 4),
        intent,
      };

    case "RUNNING":
      return {
        reply: "🏃 Here are our best running shoes.",
        products: products.filter(
          (p) =>
            p.category === "Running Shoes" ||
            p.category === "Trail Running" ||
            p.tags.includes("running")
        ),
        intent,
      };

    case "TRAIL":
      return {
        reply: "🏔️ Perfect for outdoor adventures and hiking.",
        products: products.filter(
          (p) =>
            p.category === "Trail Running" ||
            p.tags.includes("trail") ||
            p.tags.includes("hiking")
        ),
        intent,
      };

    case "BASKETBALL":
      return {
        reply: "🏀 Top basketball shoes for court performance.",
        products: products.filter(
          (p) =>
            p.category === "Basketball Shoes" ||
            p.tags.includes("basketball")
        ),
        intent,
      };

    case "CASUAL":
      return {
        reply: "👟 Comfortable everyday shoes.",
        products: products.filter(
          (p) =>
            p.category === "Lifestyle Shoes" ||
            p.category === "Slip-On Shoes" ||
            p.tags.includes("casual")
        ),
        intent,
      };

    case "BUDGET":
      return {
        reply: "💰 Best budget-friendly options.",
        products: products
          .filter((p) => p.price <= 4000)
          .sort((a, b) => a.price - b.price),
        intent,
      };

    case "PREMIUM":
      return {
        reply: "⭐ Premium and top-rated shoes.",
        products: [...products]
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4),
        intent,
      };

    case "DISCOUNT":
      return {
        reply: "🔥 Biggest discounts available right now.",
        products: [...products]
          .sort((a, b) => b.discount - a.discount)
          .slice(0, 4),
        intent,
      };

    case "COMPARE":
      return {
        reply:
          "⚖️ Add up to 3 products and open the Compare page.",
        products: products.slice(0, 4),
        intent,
      };

    case "SEARCH":
    default: {
      const words = message
        .toLowerCase()
        .split(" ")
        .filter(Boolean);

      const matched = products.filter((p) =>
        words.some(
          (word) =>
            p.name.toLowerCase().includes(word) ||
            p.category.toLowerCase().includes(word) ||
            p.description.toLowerCase().includes(word) ||
            p.tags.some((tag) =>
              tag.toLowerCase().includes(word)
            )
        )
      );

      return {
        reply:
          matched.length > 0
            ? `🎯 Found ${matched.length} matching products.`
            : "👟 No exact match found. Showing popular products.",

        products:
          matched.length > 0
            ? matched
            : [...products]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 4),

        intent:
          matched.length > 0
            ? "SEARCH"
            : "FALLBACK",
      };
    }
  }
}

const handleChat = (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const intent = detectIntent(message);

    const response = buildResponse(
      intent,
      message
    );

    res.json({
      success: true,
      data: {
        userMessage: message,
        aiReply: response.reply,
        intent: response.intent,
        productCount: response.products.length,
        products: response.products,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Chat service failed",
    });
  }
};

module.exports = {
  handleChat,
};