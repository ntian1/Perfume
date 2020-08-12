const perfumeRoutes = require("./perfumes");
const userRoutes = require("./users");
const homeRoutes = require("./root");
const searchRoutes = require("./search")
const path = require("path");

const constructorMethod = app => {
  app.use("/perfume", perfumeRoutes);

  app.use("/users", userRoutes);
  app.use("/", homeRoutes);
  app.use("/search", searchRoutes);
  app.use("*", (req, res) => {
    res.status(404).render("page/errorPage", {errorMessage: "Page Not Found!"});
  });
};

module.exports = constructorMethod;