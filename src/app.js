const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/dbConnect")
const menteeRoutes = require("./routes/menteeRoutes")
const mentorRoutes = require("./routes/mentorRoutes")
const index = require("./routes/index")

const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect()

app.use('/', index)
app.use("/sisterhoodtech/mentor", mentorRoutes)
app.use("/sisterhoodtech/mentee", menteeRoutes)
app.use('/my-documentation-route', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;