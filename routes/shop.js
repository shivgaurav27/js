const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send("<h1>Hello from server </h1>");
  // new way of setting path ".." instead of "../" working on both env
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});

module.exports = router;
