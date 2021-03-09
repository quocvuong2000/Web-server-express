const db = require("../db");

module.exports.index = (req, res)=> {
    let page = parseInt(req.query.page) || 1;
    let items = 8;

    let start = (page - 1) * items;
    let end = page * items;
    res.render("products",{
        // products: db.get("products").drop(start).take(end).value()
        products: db.get("products").value().slice(start,end)
    })
}

