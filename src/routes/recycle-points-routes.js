const express = require("express");
const router = express.Router();
const RecyclePoints = require("../database/models/RecyclePoints");

router.get("/", (req, res) => {
  RecyclePoints.findAll()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.post("/", (req, res) => {
  const { coordinateY, coordinateX, address, wasteType, city, UserId } =
    req.body;
  RecyclePoints.create({
    coordinateY,
    coordinateX,
    address,
    wasteType,
    city,
    UserId,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.put("/:id", (req, res) => {
  const { coordinateY, coordinateX, address, wasteType, city } = req.body;
  RecyclePoints.update(
    { coordinateY, coordinateX, address, wasteType, city },
    { where: { id: req.params.id } }
  )
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  RecyclePoints.destroy({ where: { id: req.params.id } })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;
