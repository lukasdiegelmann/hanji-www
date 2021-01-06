const path = require("path");
const router = require("express").Router();

router.get("/", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = router;
