const { Router } = require("express");
const express = require("express");
const app = express();
var router = express.Router();
const controller = require("../controller/users.controller");
const validation = require("../controller/users.validation");
// user list
router.get("/", controller.index);

//search user
router.get("/search", controller.search);

// create user
router.get("/create", controller.create);

router.post("/create",validation.postCreate ,controller.postCreate);

//user id
router.get("/:id", controller.getId);

module.exports = router;
