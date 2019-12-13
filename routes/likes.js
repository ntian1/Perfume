const express = require("express");
const router = express.Router();
const data = require("../data");
const perfumeData = data.perfumes;
const userData = data.users;

router.post("/:userId", async (req, res) => {
  if (Object.keys(req.query).length != 1 || !req.query.perfumeId) {
    res.status(400).json({ error: "You must provide one and only one perfumeId in your url" });
    return;
  }
  const userId = req.params.userId;
  const perfumeId = req.query.perfumeId;
  try {
    await userData.get(userId);
  } catch (e) {
    res.status(404).json({ error: "user not found" });
    return;
  }
  try {
    await perfumeData.readperfume(perfumeId);
  } catch (e) {
    res.status(404).json({ error: "perfume not found" });
    return;
  }
  try {
    await userData.likingperfume(userId, perfumeId);
    res.status(200).json();
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.delete("/:userId", async (req, res) => {
  if (Object.keys(req.query).length != 1 || !req.query.perfumeId) {
    res.status(400).json({ error: "You must one and only one perfumeId in your url" });
    return;
  }
  const userId = req.params.userId;
  const perfumeId = req.query.perfumeId;
  try {
    await userData.get(userId);
  } catch (e) {
    res.status(404).json({ error: "user not found" });
    return;
  }
  try {
    await perfumeData.readperfume(perfumeId);
  } catch (e) {
    res.status(404).json({ error: "perfume not found" });
    return;
  }
  try {
    await userData.unlikingperfume(userId, perfumeId);
    res.status(200).json();
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;