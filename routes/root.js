const express = require("express");
const router = express.Router();
const data = require("../data");
const perfumeData = data.perfume;
const userData = data.users;

router.get("/", async (req, res) => {
<<<<<<< HEAD
    var authenticate=false;
    if (req.session.cookie.expires!=false && req.session.cookie.expires!=null){
      authenticate=true;
    }
    try {
      var perfumelist=await perfumeData.getAll();
      var newlist=[];
      for (i=0;i<perfumelist.length;i++){
        var n={ name:perfumelist[i].name,
          companyName:perfumelist[i].companyName,
          img_url:perfumelist[i].picture[0],
          _id:perfumelist[i]._id
        }
        newlist.push(n);
      }
      
        
      
      res.render('page/homepage',{title:"Perfume Promotion - Home Page", featuresProduct:newlist, authenticated:authenticate});

    } catch (e) {
        res.status(500).render("page/errorPage",{ error: e, authenticated:authenticate});
    }
  });  
=======
  var authenticate = false;
  if (req.session.cookie.expires != false && req.session.cookie.expires != null) {
    authenticate = true;
  }
  try {
    var perfumelist = await perfumeData.getAll();
    perfumelist.map((perfume) => {
      const i = {
        name: perfume.name,
        companyName: perfume.companyName,
        imgUrl: perfume.link[0],
        _id: perfume._id
      };
      return i;
    });

    res.render('page/homepage', { title: "Perfume Promotion - Home Page", featuresProduct: perfumelist, authenticated: authenticate });

  } catch (e) {
    res.status(500).render("/page/errorPage", { error: e, authenticated: authenticate });
  }
});
>>>>>>> a40cfacdf3d658c9b5ee046916d8288d7b816945

module.exports = router;