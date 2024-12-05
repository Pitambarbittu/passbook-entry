const express = require("express")

const {addEntry,getEntries} = require("../controller/passbookController")

const router = express.Router();


router.post("/add-entry", addEntry)
router.get("/getEntries", getEntries)

module.exports = router;