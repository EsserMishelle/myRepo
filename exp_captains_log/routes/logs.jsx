const express = require("express");
const router = express.Router();
const logsController = require("../controllers/logs.jsx");

// Define routes using the logsController functions
router.get("/", logsController.index);
router.get("/new", logsController.new);
router.delete("/:id", logsController.delete);
router.put("/:id", logsController.update);
router.post("/", logsController.create);
router.get("/:id/edit", logsController.edit);
router.get("/:id", logsController.show);

module.exports = router;
