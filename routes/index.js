const perfumeRoutes = require("./perfume");
const userRoutes = require("./users");
const path = require("path");

const constructorMethod = app => {
  app.use("/perfume", perfumeRoutes);

  app.use("/user", userRoutes);

  app.get("/", (req,res)=>{
    res.render("./page/homePage", { tittle: "Perfume Promotion - Home Page", authenticated: "false", featuresProduct: [{_id: "id", imgUrl: "https://cdn1.imggmi.com/uploads/2019/12/12/01959bc45035cee5b6b91f6c398fd9ee-full.jpg", name: "name", company: "company"}]});
  });

  app.use("*", (req, res) => {
    res.status(404).render("page/errorPage", {errorMessage: "Page Not Found!"});
  });
};

module.exports = constructorMethod;