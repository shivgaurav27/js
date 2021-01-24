const express = require("express");
const router = express.Router();

router.get("/addproduct", (req, res) => {
  res.send(
    '<form method="POST" action="/admin/addproduct"><input type="text" name="title"/> <button type="submit">submit</button></form>'
  );
});

router.post("/addproduct", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
