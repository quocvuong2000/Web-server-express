const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routes/users.route")
app.set("view engine", "pug");
app.set("views", "./view");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//home
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/users",userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
