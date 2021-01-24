const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/addproduct", (req, res) => {
  // res.send(
  //   '<form method="POST" action="/admin/addproduct"><input type="text" name="title"/> <button type="submit">submit</button></form>'
  // );
  // new way of setting path ".." instead of "../" working on both env
  res.sendFile(path.join(__dirname, "..", "views", "addproduct.html"));
});

router.post("/addproduct", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
