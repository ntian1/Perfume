const express = require("express");
const router = express.Router();
const data = require("../data");
const perfumeData = data.perfume;
const userData = data.users;
var authenticate=false;
const commentData = data.comments;

router.post("/:reviewId", async (req, res) => {
    if (Object.keys(req.query).length != 1) {
      res.status(400).json({ error: "You must provide one and only one perfumeId in your url" });
      return;
    }
    const reviewId = req.params.reviewId;
    
    try {
      await reviewData.get(reviewId);
    } catch (e) {
      res.status(404).json({ error: "user not found" });
      return;
    }
    try {
      await userData.likingperfume(userId, perfumeId);
      res.status(200).json();
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });
  
  router.post("/dislike/:reviewId", async (req, res) => {
    const reviewId = req.query.reviewId;
    try {
      await commentData.dislikeComments(reviewId);
    } catch (e) {
      res.status(404).json({ error: "perfume not found" });
      return;
    }

  });
  