const { Router } = require("express");

const router = Router();

//router.use("/", (req, res) => res.json({ message: "end-to-end funciona" }));

router.use("/user", require("./Users"))

module.exports = router;
