const express = require("express");
var multer = require("multer");

const app = express();
var router = express.Router();
var upload = multer({ dest: "./public/uploads/" });
const controller = require("../controller/users.controller");
const validation = require("../validation/users.validation");
app.use('/uploads', express.static('uploads'));
// user list
router.get("/", controller.index);
router.get("/cookie", (req, res) => {
  // Cookies that have not been signed
  res.cookie("vuong", "123456");
  // Cookies that have been signed
  console.log("Cookies: ", req.cookies);

  res.send("hello");
});
//search user
router.get("/search", controller.search);

// create user
router.get("/create", controller.create);

router.post("/create" ,upload.single('avatar'),validation.postCreate, controller.postCreate);

//user id
router.get("/:id", controller.getId);

module.exports = router;
