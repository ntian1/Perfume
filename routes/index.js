const rootRoutes = require("./root");
const userRoutes = require("./users");
const perfumeRoutes = require("./perfume");
const commentRoutes = require("./comments")
const path = require("path");

const constructorMethod = app => {
  app.use("/", rootRoutes);
  app.use("/users",userRoutes);
  app.use("/perfumes",perfumeRoutes);
  app.use("/comments",commentRoutes);

  app.use("*", (req, res) => {
    res.status(404).render("page/errorPage", {errorMessage: "Page Not Found!"});
  });
};

module.exports = constructorMethod;