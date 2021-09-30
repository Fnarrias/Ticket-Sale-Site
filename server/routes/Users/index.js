
const { Router } = require("express");

const router = Router();

router.post("/newuser", require("../../controllers/createUser"));

router.post("/login", require("../../controllers/login"));


module.exports = router;