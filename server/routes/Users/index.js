
const { Router } = require("express");

const router = Router();

router.post("/newuser", require("../../controllers/createUser"));

router.post("/login", require("../../controllers/login"));

// router.get("/:tema", require("../../controllers/getTriviasByTema"));

// router.get("/juego/:_id", require("../../controllers/getTriviaById"));


module.exports = router;