const router = require("express").Router();

router.get("/", (_req, res) => {
    res.json(require("../store/commands.json"));
});

module.exports = router;
