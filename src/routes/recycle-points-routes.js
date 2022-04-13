const express = require("express");
const router = express.Router();
const RecyclePoints = require("../database/models/RecyclePoints");

router.get("/", (req, res) => {
  RecyclePoints.findAll()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.post("/", (req, res) => {
  const { units, capacity, Ycoordinate, Xcoordinate, waste_type, city } = req.body;
  RecyclePoints.create({
    units,
    capacity,
    Ycoordinate,
    Xcoordinate,
    waste_type,
    city,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.put("/:id", (req, res) => {
  const { units, capacity, Ycoordinate, Xcoordinate, waste_type, city } = req.body;
  RecyclePoints.update(
    { units, capacity, Ycoordinate, Xcoordinate, waste_type, city },
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
