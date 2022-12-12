const mentorController = require("../controllers/mentorController")
const express = require("express");
const { menteeAuthentication } = require("../controllers/menteeController");
const router = express.Router();

router.get("/all", mentorController.findAllMentors);
router.get("/:id", mentorController.findMentorById);
router.get("/", mentorController.findMentorByName);
router.post("/add", mentorController.createNewMentor)
router.patch("/:id", mentorController.updatementorById);
router.delete("/delete/:id", mentorController.deleteMentorById)
router.post("/login", mentorController.loginMentor);

module.exports = router