const menteeModel = require("../models/menteeModel")
const SECRET = process.env.SECRET
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const findAllMentee = async (req, res) => {
  try {
    const allMentees = await menteeModel.find().select("menteeName age languagesAndTechnologies githubPage linkedinPage workHistory goal personalDescription");
    res.status(200).json(allMentees);

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

const findMenteeById = async (req, res) => {
  try {
    const findMentee = await menteeModel.findById(req.params.id).select("menteeName age languagesAndTechnologies githubPage linkedinPage workHistory goal personalDescription");
    res.status(200).json(findMentee)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const findMenteeByName = async (req, res) => {
  try {
    const nameRequest = req.query.menteeName;

    const findMentee = await menteeModel.find({
      menteeName: { $regex: nameRequest, $options: "i" },
    }).select("menteeName age languagesAndTechnologies githubPage linkedinPage workHistory goal personalDescription");

    if (findMentee.length > 0) {
      res.status(200).json(findMentee);
    } else {
      return res.status(404).json({ message: "Mentee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewMentee = async (req, res) => {
  try {
    const passwordwithHash = bcrypt.hashSync(req.body.password, 10)
    req.body.password = passwordwithHash

    const {
      menteeName,
      age,
      email,
      password,
      phoneNumberOrWhatsapp,
      languagesAndTechnologies,
      githubPage,
      linkedinPage,
      workHistory,
      goal,
      personalDescription,
      match,
      mentorId
    } = req.body;

    const newMentee = new menteeModel({
      menteeName,
      age,
      email,
      password,
      phoneNumberOrWhatsapp,
      languagesAndTechnologies,
      githubPage,
      linkedinPage,
      workHistory,
      goal,
      personalDescription,
      match,
      mentorId
    });

    const menteeExists = await menteeModel.findOne({ menteeName: menteeName });

    if (menteeExists) {
      return res.status(422).send({ message: "Mentee already registered, please enter another one" });
    }

    const savedMentee = await newMentee.save();
    res.status(201).send({
      message: "New mentee successfully added", savedMentee
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  };
};

const updatementeeById = async (req, res) => {
  try {
    const {
      menteeName,
      age,
      email,
      password,
      phoneNumberOrWhatsapp,
      languagesAndTechnologies,
      githubPage,
      linkedinPage,
      workHistory,
      goal,
      personalDescription,
      match,
      mentorId
    } = req.body;

    const updateMentee = await menteeModel.findByIdAndUpdate(req.params.id, {
      menteeName,
      age,
      email,
      password,
      phoneNumberOrWhatsapp,
      languagesAndTechnologies,
      githubPage,
      linkedinPage,
      workHistory,
      goal,
      personalDescription,
      match,
      mentorId
    })
    res.status(200).json({ message: `Mentee ${updateMentee.menteeName} successfully updated` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message })
  }
}

const deleteMenteeById = async (req, res) => {
  try {
    const { id } = req.params;
    const findMentee = await menteeModel.findById(id);

    if (findMentee == null) {
      return res.status(404).json({ message: `Mentee with id ${id} not found` })
    };
    await findMentee.remove();
    res.status(200).json({ message: `Mentee with id ${id} was successfully deleted`, findMentee });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

function menteeAuthentication(req, res, next) {
  const authHeader = req.get("authorization");
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "The token is invalid" });
  }

  try {
    jwt.verify(token, SECRET)

    next();

  } catch (error) {
    res.status(400).json({ message: "Access denied! No authorization" });
  }
}

const loginMentee = (req, res) => {
  try {
    menteeModel.findOne({ email: req.body.email }, function (error, mentee) {
      if (!mentee) {
        return res.status(404).json(`Mentee ${req.body.menteeName} not found`)
      }

      const validpassword = bcrypt.compareSync(req.body.password, mentee.password)

      if (!validpassword) {
        return res.status(403).json("Wrong password! Please try again.")
      }

      const token = jwt.sign({ email: req.body.email }, SECRET);
      res.status(200).json({ message: "Successfully authenticated", token })
    })

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  findAllMentee,
  findMenteeById,
  findMenteeByName,
  createNewMentee,
  updatementeeById,
  deleteMenteeById,
  menteeAuthentication,
  loginMentee
}


