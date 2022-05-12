require("dotenv").config();
const debug = require("debug")("cosas-que-aprendi");
const express = require("express");

const router = express.Router();

const things = [
  { thing: "Comer pizza el viernes" },
  { thing: "Beber cafe como un enfermo" },
  { thing: "Dormir no existe" },
];

router.get("/", (req, res) => {
  res.status(200).json(things);
  debug("Han pedido cositas");
});

router.post("/things", (req, res) => {
  const thing = req.body;
  debug("Van a crear una cosita", thing);
  res.status(201).json(thing);
  things.push(thing);
});

router.delete("/things/:idThing", (req, res) => {
  const { idThing } = req.params;
  debug("Han eliminado una cosita");
  things.splice(
    things.findIndex((thing) => thing.id === +idThing),
    0
  );
  res.status(200).json("Cosita borrada");
});

module.exports = router;
