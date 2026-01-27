const newsGrid = document.getElementById("newsGrid");
const loading = document.getElementById("loading");
const totalNewsEl = document.getElementById("totalNews");
const categoryFilter = document.getElementById("categoryFilter");

let allNews = [];

async function fetchNews() {
  loading.style.display = "block";
  newsGrid.innerHTML = "";

  const response = await fetch("/news");
  const data = await response.json();

  allNews = data;

  renderNews(data);
  updateStats(data);

  loading.style.display = "none";
}


function renderNews(newsList) {
  newsGrid.innerHTML = "";

  newsList.forEach(news => {
    const card = document.createElement("article");
    card.className = "news-card";

    card.innerHTML = `
      <h2>${news.title}</h2>
      <p>${news.description}</p>
      <span class="category">${news.category}</span>
    `;

    newsGrid.appendChild(card);
  });
}

function updateStats(newsList) {
  totalNewsEl.textContent = newsList.length;

  const categories = new Set(newsList.map(n => n.category));
  document.getElementById("totalCategories").textContent = categories.size;
}


categoryFilter.addEventListener("change", () => {
  const category = categoryFilter.value;

  if (category === "todas") {
    renderNews(allNews);
    return;
  }

  const filtered = allNews.filter(n => n.category === category);
  renderNews(filtered);
});


document.addEventListener("DOMContentLoaded", () => {
  fetchNews();
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});
