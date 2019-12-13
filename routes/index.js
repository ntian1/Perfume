const perfumeRoutes = require("./perfumes");
const userRoutes = require("./users");
const path = require("path");

const constructorMethod = app => {
  app.use("/perfume", perfumeRoutes);

  app.use("/users", userRoutes);

  app.get("/", (req,res)=>{
    res.render('page/homePage');
  });

  app.use("*", (req, res) => {
    res.status(404).render("page/errorPage", {errorMessage: "Page Not Found!"});
  });
};

module.exports = constructorMethod;