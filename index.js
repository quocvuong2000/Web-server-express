const express = require("express");
const app = express();
const port = 3000;
var cookieParser = require('cookie-parser')
const userRoute = require("./routes/users.route")
const authRoute = require("./routes/auth.route")
const authMiddleware = require("./middleware/auth.middleware"); 
 
app.use(cookieParser("1234123a"))
app.set("view engine", "pug");
app.set("views", "./view");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(cookieParser());

//home
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/users",authMiddleware.requireAuth,userRoute);
app.use("/auth",authRoute);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
