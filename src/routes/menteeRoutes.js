const menteeController = require("../controllers/menteeController")
const express = require("express")
const router = express.Router();

router.get("/all", menteeController.findAllMentee );
router.get("/:id", menteeController.findMenteeById);
router.get("/", menteeController.findMenteeByName);
router.post("/add", menteeController.createNewMentee)
router.patch("/:id",  menteeController.updatementeeById);
router.delete("/delete/:id", menteeController.deleteMenteeById)
router.post("/login", menteeController.loginMentee);

module.exports = router