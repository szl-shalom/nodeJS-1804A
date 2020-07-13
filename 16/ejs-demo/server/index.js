const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    console.log(1)
    res.send("123")
})


module.exports = router