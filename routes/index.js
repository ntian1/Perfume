const perfumeRoutes = require("./perfume");
const userRoutes = require("./users");
const path = require("path");

const constructorMethod = app => {
  app.use("/perfume", perfumeRoutes);

  app.get("/user", userRoutes);

  app.get("/", (req,res)=>{
    res.sendFile(path.resolve("static/homePage.html"));
  });

  app.use("*", (req, res) => {
    res.status(404).render("page/errorPage", {errorMessage: "Page Not Found!"});
  });
};

module.exports = constructorMethod;