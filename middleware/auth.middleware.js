const db = require("../db");

module.exports.requireAuth = (req,res,next) => {
    var cookie = req.signedCookies.userID;

    if(!cookie) {
        res.redirect("/auth/login");
        return;
    }
    var user = db.get("users").find({ id : cookie}).value();

    if(!user) {
        res.redirect("/auth/login");
        return;
    }
    res.locals.localName = user;
    next();
}

