const express = require("express");
const router = express.Router();
const data = require("../data");
const perfumeData = data.perfume;
const userData = data.users;

router.get("/", async (req, res) => {
    var authenticate=false;
    if (req.session.cookie.expires!=false && req.session.cookie.expires!=null){
      authenticate=true;
    }
    try {
      const perfumelist=await perfumeData.getAll();
      res.render('page/homepage',{title:"Perfume Promotion - Home Page", featuresProduct:perfumelist});

    } catch (e) {
        res.status(500).render("/page/errorPage",{ error: e, authenticated:authenticate});
    }
  });  

module.exports = router;