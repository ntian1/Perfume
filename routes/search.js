const express = require("express");
const router = express.Router();
const data = require("../data");
const perfumeData = data.perfume;
const userData = data.users;

router.post("/", async (req, res) => {
    let name=req.body.name;
    try{
        var perfume = await perfumeData.searchTag(name)
        res.render('page/searchPage',perfume)
    }catch(e){
        res.status(404).render('page/errorPage',{error:"not found"})
    }

});

module.exports = router;