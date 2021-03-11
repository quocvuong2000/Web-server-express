const db = require("../db");
const { nanoid } = require("nanoid");


const idlength = 5;

module.exports.index = (req, res) => {
  res.render("users/index", {
    users: db.get("users").value(),
  });
};

module.exports.search =  (req, res) => {
    var query = req.query.q;
    var searchResult = db
      .get("users")
      .value()
      .filter((user) => {
        return user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    res.render("users/index", {
      users: searchResult,
    });
  }

  module.exports.postCreate = (req, res) => {
    // Add a post
    req.body.id  = nanoid(idlength);
    req.body.avatar = req.file.path.split("\\").slice(1).join("/");

    db.get("users").push(req.body).write();
    res.redirect("/users");
  }

  module.exports.create =  (req, res) => {
    res.render("users/create");
  }

  module.exports.getId = (req, res) => {
    var id = req.params.id;
    var user = db.get("users").find({ id: id }).value();
  
    res.render("users/view", {
      user: user,
    });
  }