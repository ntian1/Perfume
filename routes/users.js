const express = require("express");
const router = express.Router();
const xss = require("xss");

router.get("/login", (req, res) => {
    res.render("./page/loginPage", { title: "User", authenticated: "false" });
});

router.post("/:id", (req, res) => {
    console.log(req.body.reviewId + req.body.newReview + req.body.newRating);
    res.status(200).render("./page/errorPage", { title: "user", errorMessage: "post user" });
});

router.delete("/:id", (req, res) => {
    console.log(req.body.reviewId);
    res.status(200).render("./page/errorPage", { title: "user", errorMessage: "post user" });
});

router.get("/:id", (req, res) => {
    res.status(500).render("./page/userPage", { title: "user", loginHidden:"hide", userName:"rxy", userId:"id", emailAddress: "asd@gmail.com", userReviews:[{perfumeId: "id", reviewId: "id", perfumeName: "Flower", reviewContent: "It is perfect!", reviewRating: "3"}, {perfumeId: "id", reviewId: "id", perfumeName: "Grass", reviewContent: "It is not perfect!", reviewRating: "1"}]});
});



module.exports = router;