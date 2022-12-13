const app = require('./src/app')
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send({ message: "Hi girls, this is Sisterhood Tech API!" })
})

app.listen(PORT, () => {
    console.log(`API listening on Port ${PORT}`);
})