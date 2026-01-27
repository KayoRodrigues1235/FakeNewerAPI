const healthRoute = require("./routes/healthRoute");
const homeRoute = require("./routes/homeRoute");
const newsRoute = require("./routes/newsRoute");


module.exports = (app) => {
    app.use("/", homeRoute),
    app.use("/health", healthRoute)
    app.use("/news", newsRoute)
};

