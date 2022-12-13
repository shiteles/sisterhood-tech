const mentorModel = require("../models/mentorModel")
const SECRET = process.env.SECRET
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const findAllMentors = async (req, res) => {
    try {
        const allMentors = await mentorModel.find().select("mentorName age languagesAndTechnologies githubPage linkedinPage workHistory goal personalDescription");
        res.status(200).send(allMentors);

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};

const findMentorById = async (req, res) => {
    try {
        const findMentor = await mentorModel.findById(req.params.id).select("mentorName age languagesAndTechnologies githubPage linkedinPage workHistory goal personalDescription");
        res.status(200).json(findMentor)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const findMentorByName = async (req, res) => {
    try {
        const nameRequest = req.query.mentorName;

        const findMentor = await mentorModel.find({
            mentorName: { $regex: nameRequest, $options: "i" },
        }).select("mentorName age languagesAndTechnologies githubPage linkedinPage workHistory goal personalDescription");

        if (findMentor.length > 0) {
            res.status(200).json(findMentor);
        } else {
            return res.status(404).json({ message: "Mentor not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createNewMentor = async (req, res) => {
    try {
        const passwordwithHash = bcrypt.hashSync(req.body.password, 10)
        req.body.password = passwordwithHash
        
        const {
            mentorName,
            age,
            email,
            password,
            phoneNumberOrWhatsapp,
            languagesAndTechnologies,
            githubPage,
            linkedinPage,
            workHistory,
            personalDescription,
            match
        } = req.body;

        const newMentor = new mentorModel({
            mentorName,
            age,
            email,
            password,
            phoneNumberOrWhatsapp,
            languagesAndTechnologies,
            githubPage,
            linkedinPage,
            workHistory,
            personalDescription,
            match
        });

        const mentorExists = await mentorModel.findOne({ mentorName: mentorName });

        if (mentorExists) {
            return res.status(422).send({ message: "Mentor already registered, please enter another one" });
        }

        const savedMentor = await newMentor.save();
        res.status(201).send({
            message: "New mentor successfully added", savedMentor
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    };
};

const updatementorById = async (req, res) => {
    try {
        const {
            mentorName,
            age,
            email,
            password,
            phoneNumberOrWhatsapp,
            languagesAndTechnologies,
            githubPage,
            linkedinPage,
            workHistory,
            personalDescription,
            match
        } = req.body;

        const updateMentor = await mentorModel.findByIdAndUpdate(req.params.id, {
            mentorName,
            age,
            email,
            password,
            phoneNumberOrWhatsapp,
            languagesAndTechnologies,
            githubPage,
            linkedinPage,
            workHistory,
            personalDescription,
            match
        })
        res.status(200).json({ message: `Mentor ${updateMentor.mentorName} successfully updated` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message })
    }
}

const deleteMentorById = async (req, res) => {
    try {
        const { id } = req.params;
        const findMentor = await mentorModel.findById(id);

        if (findMentor == null) {
            return res.status(404).json({ message: `Mentor with id ${id} not found` })
        };
        await findMentor.remove();
        res.status(200).json({ message: `Mentor with id ${id} was successfully deleted`, findMentor });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

function mentorAuthentication(req,res,next){
    const authHeader = req.get("authorization");
    const token = authHeader.split(" ")[1];
    
    if (!token) {
      return res.status(401).send({ message: "The token is invalid" });
    }

    try{
    jwt.verify(token, SECRET)

    next();

  } catch (error) {
    res.status(400).send({ message: "Access denied! No authorization" });
  } 
}

const loginMentor = (req, res) => {
    try{
      mentorModel.findOne({email: req.body.email}, function(error, mentor){
        if(!mentor){
          return res.status(404).send(`Mentor ${req.body.mentorName} not found`)
        }
    
        const validpassword = bcrypt.compareSync(req.body.password, mentor.password)
  
        if(!validpassword){
          return res.status(403).send("Wrong password! Please try again.")
        }
  
        const token = jwt.sign({ email: req.body.email }, SECRET);
        res.status(200).send({ message: "Successfully authenticated",token })
      })
  
    }catch(error){
      res.status(500).send({message: error.message});
    }
  }

module.exports = {
    findAllMentors,
    findMentorById,
    findMentorByName,
    createNewMentor,
    updatementorById,
    deleteMentorById,
    mentorAuthentication,
    loginMentor
}