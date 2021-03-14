const { nanoid } = require("nanoid");
const db = require("../db");

module.exports = (req, res, next) => {
  if (!req.signedCookies.sessionId) {
    console.log(req.signedCookies.sessionId);

    var sessionId = nanoid(5);
    res.cookie("sessionId", sessionId, {
      signed: true,
    });

    db.get("sessions")
      .push({
        sessionId: sessionId,
      })
      .write();
  }
  next();
};
