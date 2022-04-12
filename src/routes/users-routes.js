const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../database/models/Users");

const { buildToken } = require("../auth/authenticate");

router.post("/register", (req, res) => {
  const { name, first_last_name, second_last_name, email, password } = req.body;
  User.create({
    name,
    first_last_name,
    second_last_name,
    email,
    password: bcrypt.hashSync(password, 10),
  })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({
    where: { email: email },
  }).then((user) => {
    if (user) {
      const validatePassword = bcrypt.compareSync(password, user.password);
      if (validatePassword) {
        res.json({ token: buildToken(user) });
      } else {
        res.json({ error: "Invalid Password" });
      }
    } else {
      res.json({ error: "Invalid Email" });
    }
  });
});

module.exports = router;
