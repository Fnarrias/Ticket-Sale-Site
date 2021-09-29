const { Router } = require("express");

const router = Router();

router.post("/new", require("../controllers/crearConcierto"));
router.get("/todos", require("../controllers/todoConcierto"));
router.put("/tickets/:conciertoID", require("../controllers/comprarTicket"));
router.get("/:conciertoID", require("../controllers/conciertoPorId"));
router.delete("/:conciertoID", require("../controllers/deleteConcierto"));

module.exports = router;
