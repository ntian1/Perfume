const express = require("express");
const router = express.Router();
const data = require("../data");
const perfumeData = data.perfume;
const userData = data.users;

router.get("/:tag", async (req, res) => {
    let name=req.params.tag;
    try{
        var perfume = await perfumeData.searchTag(name);
        res.render('page/searchPage',{searchResult:perfume});
    }catch(e){
        res.status(404).render('page/errorPage',{error:"not found"})
    }

});

module.exports = router;