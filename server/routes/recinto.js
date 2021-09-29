const { Router } = require("express");

const router = Router();

router.post("/", require("../controllers/crearRecinto"));
router.get("/listaCiudades", require("../controllers/listaCiudades"));
router.get("/:recintoID", require("../controllers/recintoPorId"));
router.delete("/:recintoID", require("../controllers/deleteRecinto"));

module.exports = router;
