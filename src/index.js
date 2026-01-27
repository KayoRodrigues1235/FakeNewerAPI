const express = require("express");
const httpRoutes = require("./public");
const path = require("path");

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public_html/")));

httpRoutes(app);

app.listen(PORT, () => {
  console.log(`📰 FakeNewer API running on http://localhost:${PORT}`);
});
