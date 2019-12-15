const express = require("express");
const router = express.Router();
const data = require("../data");
const perfumeData = data.perfume;
const userData = data.users;
var authenticate=false;

router.get("/", async (req, res) => {
    try {
      const perfumeList = await perfumeData.getAll();
      res.json(perfumeList);
      
    } catch (e) {
      res.status(500).render("page/errorPage",{ error: e , authenticated:authenticated});
    }
  });   

router.post("/", async (req, res) => {
  const blogperfumeData = req.body;
  if (!blogperfumeData) {
    res.status(400).json({ error: "You must provide data to perfume" });
    return;
  }

  if (!blogperfumeData.name||typeof blogperfumeData.name != "string") {
    res.status(400).json({ error: "You must provide a String name" });
    return;
  }
  if (!blogperfumeData.companyName||typeof blogperfumeData.companyName != "string") {
    res.status(400).json({ error: "You must provide a string companyName" });
    return;
  }
  if (!blogperfumeData.introduction||typeof blogperfumeData.introduction != "string") {
    res.status(400).json({ error: "You must provide a introduction" });
    return;
  }
  try {
    const newperfume = await perfumeData.create(
      blogperfumeData.name, 
      blogperfumeData.companyName,
      blogperfumeData.introduction
      );
      url = "perfumes/:" + newperfume._id.toString()
    res.status(200).redirect(url,{message:"post success"});
  } catch (e) {
    res.status(500).render('page/errorPage',{ errorMessage: e , authenticated:authenticate});
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (req.session.cookie.expires!=false && req.session.cookie.expires!=null){
      authenticate=true;
    }else{
        authenticate=false;
    }
    const perfume = await perfumeData.get(req.params.id);
    res.render('page/perfumePage',{authenticated: true,name:perfume.name,
    company:perfume.companyName, perfumeDetails:perfume.introduction,
  _id:perfume._id, "amazon-url":perfume.link[0], perfumeTages:perfume.tags, authenticated:authenticate});
  } catch (e) {
    res.status(404).render('page/errorPage',{ errorMessage: e });
  }
});

router.put("/:id", async (req, res) => {
  const updatedData = req.body;

  if (!updatedData.newname&&!updatedData.newintroduction) {
    res.status(400).json({ error: "You must provide a new name or new type" });
    return;
  }

  try {
    await perfumeData.getperfumeById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "perfume not found" });
  }

  try {
    const updatedperfume = await perfumeData.updateperfume(req.params.id,updatedData);
    res.json(updatedperfume);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.delete("/:id", async (req, res) => {
  try {

    blogperfumeData = await perfumeData.getperfumeById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "perfume not found" });
  }
  try {
    const removed = await perfumeData.removeperfume(req.params.id);
    await userData.deletePerfume(blogperfumeData.companyName.id,req.params.id);
    res.json(removed);
    } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("comment/:perfumeId", async (req, res) => {
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
  
router.delete("comment/:perfumeId", async (req, res) => {
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

router.post("like/:userId", async (req, res) => {
  if (Object.keys(req.query).length != 1 || !req.query.perfumeId) {
    res.status(400).json({ error: "You must provide one and only one perfumeId in your url" });
    return;
  }
  const userId = req.params.userId;
  const perfumeId = req.query.perfumeId;
  try {
    await userData.get(userId);
  } catch (e) {
    res.status(404).json({ error: "user not found" });
    return;
  }
  try {
    await perfumeData.readperfume(perfumeId);
  } catch (e) {
    res.status(404).json({ error: "perfume not found" });
    return;
  }
  try {
    await userData.likingperfume(userId, perfumeId);
    res.status(200).json();
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.delete("like/:userId", async (req, res) => {
  if (Object.keys(req.query).length != 1 || !req.query.perfumeId) {
    res.status(400).json({ error: "You must one and only one perfumeId in your url" });
    return;
  }
  const userId = req.params.userId;
  const perfumeId = req.query.perfumeId;
  try {
    await userData.get(userId);
  } catch (e) {
    res.status(404).json({ error: "user not found" });
    return;
  }
  try {
    await perfumeData.readperfume(perfumeId);
  } catch (e) {
    res.status(404).json({ error: "perfume not found" });
    return;
  }
  try {
    await userData.unlikingperfume(userId, perfumeId);
    res.status(200).json();
  } catch (e) {
    res.status(500).json({ error: e });
  }
});



module.exports = router;