const express = require("express");
const router = express.Router();

const newsController = require("../../controllers/newsController");

// GET /news
router.get("/", newsController.getAll);

// GET /news/:id
router.get("/:id", newsController.getById);

// GET /news?category=<CATEGORIA>
router.get("/filter/category", newsController.getByCategory);

module.exports = router;
