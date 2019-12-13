const express = require("express");
const configRoutes = require("./routes");
const exphbs = require("express-handlebars");
const static = express.static(__dirname + "/public");

const app = express();
app.use("/public", static);

const rewriteUnsupportedBrowserMethods = (req, res, next) => {
  if (req.body && req.body._method) {
    req.method = req.body._method;
    delete req.body._method;
  }
  next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rewriteUnsupportedBrowserMethods);

app.engine("handlebars", exphbs({ helpers: require('./config/handlebars-helpers') }));
app.set("view engine", "handlebars");

configRoutes(app);

app.use('users/user_homepage',function(request, response, next){
  if(request.session.cookie.expires==false || request.session.cookie.expires==null){
    response.status(403).render('page/login',{error:'you did not login'});
  }
  else{
    next();
  }
});

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
