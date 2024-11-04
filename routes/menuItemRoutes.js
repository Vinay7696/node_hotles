const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new Menu(data);
    const responses = await newMenu.save();
    console.log("data saved");
    res.status(200).json(responses);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal  serve error " });
  }
});

//GET method to get the person
router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal  serve error " });
  }
});

router.post("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "sour") {
      const response = await Menu.find({ taste: tasteType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invaild work Type " });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal  serve error " });
  }
});

module.exports = router;
