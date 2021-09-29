const { Router } = require("express");

const router = Router();

router.post("/", require("../controllers/crearConcierto"));
router.get("/", require("../controllers/todoConcierto"));

router.get("/listaGeneros", require("../controllers/listaGeneros.js"));

router.put("/entradas/:conciertoID", require("../controllers/comprarEntrada"));
router.get(
  "/porArtista/:nombreArtista",
  require("../controllers/conciertosPorArtista")
);
router.get("/porId/:conciertoId", require("../controllers/conciertoPorId"));
router.get(
  "/porGenero/:nombreGenero",
  require("../controllers/conciertosPorGenero")
);
router.get(
  "/porCiudad/:nombreCiudad",
  require("../controllers/conciertosPorCiudad")
);

router.delete("/:conciertoID", require("../controllers/deleteConcierto"));

module.exports = router;
