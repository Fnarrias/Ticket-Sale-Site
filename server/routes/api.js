const { Router } = require("express");

const router = Router();

router.get("/matrizBuscador", require("../controllers/matrizBuscador"));
router.use("/concierto", require("./concierto"));
router.use("/artista", require("./artista"));
router.use("/recinto", require("./recinto"));
module.exports = router;
