const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;
const perfumeData = data.perfume;
const commentData = data.comments;

router.post("/:perfumeId", async (req, res) => {
    if (Object.keys(req.query).length != 1 || !req.query.userId) {
        res.status(400).json({ error: "You must provide one and only one userId in your url" });
        return;
      }
      const perfumeId = req.params.perfumeId;
      const userId = req.query.userId;
      const commentId = req.query.commentId;
      const comment = req.query.commentId;
      try {
        await perfumeData.get(perfumeId);
      } catch (e) {
        res.status(404).json({ error: "perfume not found" });
        return;
      }
      try {
        await userData.readuser(userId);
      } catch (e) {
        res.status(404).json({ error: "user not found" });
        return;
      }
      try {
        await perfumeData.commentinguser(perfumeId, userId, commentId, comment);
        await userData.comment
        res.status(200).json();
      } catch (e) {
        res.status(500).json({ error: e });
      }
    });
    
router.delete("/:perfumeId", async (req, res) => {
    if (Object.keys(req.query).length != 1 || !req.query.userId) {
    res.status(400).json({ error: "You must one and only one userId in your url" });
    return;
    }
    const perfumeId = req.params.perfumeId;
    const userId = req.query.userId;
    try {
    await perfumeData.get(perfumeId);
    } catch (e) {
    res.status(404).json({ error: "perfume not found" });
    return;
    }
    try {
    await userData.readuser(userId);
    } catch (e) {
    res.status(404).json({ error: "user not found" });
    return;
    }
    try {
    await perfumeData.decommentinguser(perfumeId, userId, commentId);
    res.status(200).json();
    } catch (e) {
    res.status(500).json({ error: e });
    }
});

  module.exports = router;