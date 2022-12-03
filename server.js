const app = require('./src/app')
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send({ message: "Hi girls, essa é a Sisterhood Tech!"})
})

app.listen(PORT, ()=>{
    console.log(`API esta rodando na porta ${PORT}`);
})