const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes//shop");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  //   res.status(404).send("<h1> Page Not Found </h1>");
  res.status(404).sendFile(path.join(__dirname, "views", "PageNotFOund.html"));
});

const server = http.createServer(app);

server.listen(3000);
