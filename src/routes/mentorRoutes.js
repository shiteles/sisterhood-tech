const mentorController = require("../controllers/mentorController")
const express = require("express");
const { menteeAuthentication } = require("../controllers/menteeController");
const router = express.Router();

router.get("/all", mentorController.findAllMentors);
router.get("/:id", mentorController.mentorAuthentication, mentorController.findMentorById);
router.get("/", mentorController.findMentorByName);
router.post("/add", mentorController.createNewMentor)
router.post("/login", mentorController.loginMentor);
router.patch("/:id", mentorController.mentorAuthentication, mentorController.updatementorById);
router.delete("/delete/:id", mentorController.mentorAuthentication, mentorController.deleteMentorById)


module.exports = router