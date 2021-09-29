const { Router } = require("express");

const router = Router();

router.get("/listaArtistas", require("../controllers/listaArtistas"));
router.post("/new", require("../controllers/crearArtista"));
router.get("/:idArtista", require("../controllers/artistaPorId"));
router.delete("/:idArtista", require("../controllers/deleteArtista"));

module.exports = router;
