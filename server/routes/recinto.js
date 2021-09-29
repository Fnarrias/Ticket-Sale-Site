const { Router } = require("express");

const router = Router();

router.post("/new", require("../controllers/crearRecinto"));
router.get("/:recintoID", require("../controllers/recintoPorId"));
router.delete("/:recintoID", require("../controllers/deleteRecinto"));

module.exports = router;
