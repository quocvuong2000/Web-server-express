const express = require("express");
const app = express();
var router = express.Router();
const controller = require("../controller/product.controller");

router.get("/", controller.index);


module.exports = router;