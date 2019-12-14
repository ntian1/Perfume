const express = require("express");
const router = express.Router();
const xss = require("xss");

router.get("/login", (req, res) => {
    res.render("./page/loginPage", { title: "User", accountHidden: "hidden" });
});

router.post("/:id", (req, res) => {
    console.log(req.body.userId);
    res.status(200).render("./page/errorPage", { title: "user", errorMessage: "post user" });
});

router.get("/:id", (req, res) => {
    res.status(500).render("./page/userPage", { title: "user", loginHidden:"hide", userName:"rxy", userId:"id", emailAddress: "asd@gmail.com", userReviews:[{perfumeId: "id", perfumeName: "Flower", reviewContent: "It is perfect!"}, {perfumeId: "id", perfumeName: "Grass", reviewContent: "It is not perfect!"}]});
});



module.exports = router;