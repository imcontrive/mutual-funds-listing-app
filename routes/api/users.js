var express = require("express");
var router = express.Router();
var User = require("../../models/User");
var auth = require("../../utils/verifyToken");

// Import bcrypt and jwt
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

// Routes for user registration

router.post("/signup", (req, res) => {
  User.create(req.body, (err, user) => {
    // console.log("request.body", req.body);
    if (err) return res.json(err);
    jwt.sign({ userId: user.id }, process.env.SECRET, (err, token) => {
      if (err) return res.json({ success: false, Message: err });
      return res.status(201).json({
        success: true,
        message: "Your are succesfully registered.",
        token: token
      });
    });
  });
});

// routes for login
router.post("/login", (req, res) => {
  const data = req.body;
  console.log(data, "from backend");
  User.findOne({ email: data.email }, (err, user) => {
    if (err)
      return res.status(500).json({ success: false, error: "server error" });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, error: "Please enter a valid email" });
    }
    if (user) {
      var result = bcrypt.compareSync(data.password, user.password);
      if (result) {
        var token = jwt.sign({ _id: user._id }, process.env.SECRET);
        return res.status(200).json({
          success: true,
          message: "You are succesfully loggedIn",
          token: token,
          user
        });
      } else {
        return res
          .status(400)
          .json({ success: false, error: "Invalid Password" });
      }
    }
  });
});

// routes for finding currentLogin Users

router.get("/me", auth.verifyToken, (req, res) => {
  console.log(req.body, "/me....");
  User.findById(req.user._id, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(201).json({ success: true, user: user });
  });
});

router.use(auth.verifyToken);

// routes for a single user
router.get("/:id", function(req, res, next) {
  User.findById(req.params.id, (err, user) => {
    if (err)
      return res
        .status(500)
        .json({ success: false, message: "server error", err });
    if (user) {
      return res.status(200).json({ success: true, user });
    }
  });
});

// routes for edit/update

router.put("/edit/:id", function(req, res, next) {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, user) => {
      if (err)
        return res
          .status(500)
          .json({ success: false, message: "server error", err });
      if (user) {
        return res
          .status(200)
          .json({ success: true, message: "user details are updated", user });
      }
    }
  );
});

module.exports = router;
