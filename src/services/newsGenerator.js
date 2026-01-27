const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/news.json");

function loadNews() {
  const rawData = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(rawData);
}

function getAllNews() {
  return loadNews();
}

function getNewsById(id) {
  const news = loadNews();
  return news.find(n => n.id === Number(id));
}

function getNewsByCategory(category) {
  const news = loadNews();
  return news.filter(n => n.category.toLowerCase() === category.toLowerCase());
}

module.exports = {
  getAllNews,
  getNewsById,
  getNewsByCategory
};
