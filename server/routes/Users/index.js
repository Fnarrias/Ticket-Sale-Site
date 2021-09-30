
const { Router } = require("express");

const router = Router();

router.post("/newuser", require("../../controllers/createUser"));

router.post("/login", require("../../controllers/login"));

router.get("/conciertosusuario/:_id", require("../../controllers/conciertosPorUsuario"))


module.exports = router;