const router = require("express").Router();
const { runCleanup } = require("../controllers/jobController");

router.post("/cleanup", runCleanup);

module.exports = router;
