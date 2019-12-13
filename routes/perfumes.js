const express = require("express");
const router = express.Router();
const data = require("../data");
const perfumeData = data.Perfume;
const userData = data.users;

router.get("/", async (req, res) => {
    try {
      const perfumeList = await perfumeData.getAll();
      res.json(perfumeList);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });   

router.post("/", async (req, res) => {
  const blogperfumeData = req.body;
  if (!blogperfumeData) {
    res.status(400).json({ error: "You must provide data to perfume" });
    return;
  }

  if (!blogperfumeData.title||typeof blogperfumeData.title != "string") {
    res.status(400).json({ error: "You must provide a String title" });
    return;
  }
  if (!blogperfumeData.author||typeof blogperfumeData.author != "string") {
    res.status(400).json({ error: "You must provide a string author" });
    return;
  }
  if (!blogperfumeData.content||typeof blogperfumeData.content != "string") {
    res.status(400).json({ error: "You must provide a content" });
    return;
  }
  try {
    const newperfume = await perfumeData.addperfume(
      blogperfumeData.title, 
      blogperfumeData.author,
      blogperfumeData.content.productName,
      blogperfumeData.content.picture,
      blogperfumeData.content.companyName,
      blogperfumeData.content.parameters,
      blogperfumeData.content.briefIntro,
      blogperfumeData.content.links,
      blogperfumeData.content.detailInfo,
      blogperfumeData.content.tags
      );
    await userData.addPerfume(blogperfumeData.author,newperfume._id);
    res.status(200).json(newperfume);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const perfume = await perfumeData.getperfumeById(req.params.id);
    res.json(perfume);
  } catch (e) {
    res.status(404).json({ error: "perfume not found" });
  }
});

router.put("/:id", async (req, res) => {
  const updatedData = req.body;

  if (!updatedData.newTitle&&!updatedData.newContent) {
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
    await userData.deletePerfume(blogperfumeData.author.id,req.params.id);
    res.json(removed);
    } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;