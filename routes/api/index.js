var express = require("express");
var router = express.Router();

// Import users routes as a userRouter
var userRouter = require("./users");

router.use("/users", userRouter);

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json({ success: true, message: "Welcome to Mutual Funds Listing App" });
});

module.exports = router;
