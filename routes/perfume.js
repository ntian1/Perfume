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
    res.render("page/perfumePage", { loginHidden: "hide", accountHidden: "", title: "Perfume", perfumeDetails: string1, perfumeCompanyInfo: string2, perfumeTags: ["man", "casual"] });
});

module.exports = router;