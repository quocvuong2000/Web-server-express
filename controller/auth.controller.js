const db = require("../db");
const md5 = require('md5');

module.exports.authLogin = (req, res) => {
    res.render("auth/login");
}

module.exports.postLogin = (req,res) => {
    var email = req.body.email;
    var password = req.body.password;
    var user = db.get("users").find({ email : email }).value();
    if(!user) {
        res.render("auth/login",{
            errors: [
                'User does not exists'
            ]
        })
        return;
    }
    var hashPassword = md5(password);
    if(hashPassword !== user.password) {
        res.render("auth/login", {
            errors: [
                'Worng password'
            ]
        })
        return;

    }

    res.cookie("userID",user.id,{ signed: true });
    res.redirect("/users");
}