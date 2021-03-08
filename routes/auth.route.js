const express = require("express");
const app = express();
var router = express.Router();
const controller = require("../controller/auth.controller");
router.get("/login", controller.authLogin);
router.post("/login", controller.postLogin);
module.exports = router;
