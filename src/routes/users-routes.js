const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../database/models/Users");

const { buildToken } = require("../auth/authenticate");

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.create({
    name,
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
        res.json({
          userData: { id: user.id, name: user.name, email: user.email },
          token: buildToken(user),
        });
      } else {
        res.json({ error: "Invalid Password" });
      }
    } else {
      res.json({ error: "Invalid Email" });
    }
  });
});

router.get("/:id", (req, res) => {
  User.findOne({
    where: { id: req.params.id },
    attributes: {
      exclude: ["password", "email", "createdAt", "updatedAt", "id"],
    },
  })
    .then((user) => res.json(user))
    .catch((error) => res.json(error));
});

module.exports = router;
