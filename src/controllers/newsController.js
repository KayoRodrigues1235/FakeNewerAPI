const newsGenerator = require("../services/newsGenerator");

function getAll(req, res) {
  const news = newsGenerator.getAllNews();
  res.json(news);
}

function getById(req, res) {
  const { id } = req.params;
  const news = newsGenerator.getNewsById(id);

  if (!news) {
    return res.status(404).json({ error: "News not found" });
  }

  res.json(news);
}

function getByCategory(req, res) {
  const { category } = req.query;

  if (!category) {
    return res.status(400).json({ error: "Category is required" });
  }

  const news = newsGenerator.getNewsByCategory(category);
  res.json(news);
}

module.exports = {
  getAll,
  getById,
  getByCategory
};
