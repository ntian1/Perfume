const express = require("express");
const router = express.Router();
const xss = require("xss");

router.get("/tag/:tagName", (req, res) => {
    res.status(500).render("page/errorPage", { title: "Perfume - Tag", errorMessage: "get tag tagname" });
});

router.get("/toprating", (req, res) => {
    res.status(500).render("page/errorPage", { title: "Perfume - Toprating", errorMessage: "toprating" });
});

router.get("/mostcomment", (req, res) => {
    res.status(500).render("page/errorPage", { title: "Perfume - Mostcomment", errorMessage: "mostcomment" });
});

router.get("/search/:string", (req, res) => {
    res.status(500).render("page/errorPage", { title: "Perfume - Search", errorMessage: "search string" });
});

router.get("/:id", (req, res) => {
    let string1 = "gasdkgjas;dovjn;weufnavnaeurifnasduifhsdaig;hasdjkfnasdiufsdlifhasdigbasdflsadhf";
    let string2 = "gasdkgjas;dovjn;weufnavnaeurifnasduifhsdaig;hasdjkfnasdiufsdlifhasdigbasdflsadhfadsfdafaggasdgsadf";
    let string3 = "https://www.amazon.com/Zinus-Jennifer-Collection-Rectangular-Computer/dp/B075F9KPQH?ref_=bl_dp_s_web_12253492011&th=1";
    res.render("page/perfumePage", { authenticated: "false", title: "Perfume", amazonUrl: string3, perfumeDetails: string1, perfumeCompanyInfo: string2, perfumeTags: ["man", "casual"],perfumeReviews:[{userName:"ql",content:"good", likes: "122", dislikes: "3"},{userName:"jyzh",content:"bad", likes: "12", dislikes: "365"}], userReview: {reviewId: "id", reviewContent: "like shit", reviewRating: "1", likes: "44", dislikes: "555"}});
});

router.delete("/:id", (req, res) => {
    console.log(req.body.reviewId);
    res.status(200).render("./page/errorPage", { title: "user", errorMessage: "post user" });
});

module.exports = router;