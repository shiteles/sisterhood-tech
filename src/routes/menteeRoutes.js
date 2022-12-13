const menteeController = require("../controllers/menteeController")
const express = require("express")
const router = express.Router();

router.get("/all", menteeController.findAllMentee);
router.get("/:id", menteeController.menteeAuthentication, menteeController.findMenteeById);
router.get("/", menteeController.findMenteeByName);
router.post("/add", menteeController.createNewMentee)
router.post("/login", menteeController.loginMentee);
router.patch("/:id", menteeController.menteeAuthentication, menteeController.updatementeeById);
router.delete("/delete/:id", menteeController.menteeAuthentication, menteeController.deleteMenteeById)


module.exports = router