const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('views'))
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.text())

app.get('/', (req, res) => {
    res.render("index.html")
})

app.post('/', (req, res) => {
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const comoConheceu = req.body.comoConheceu;
    const redeSocial = [req.body.facebook, req.body.linkedin, req.body.instagram]
    
    res.json({ 
        nome,
        telefone,
        comoConheceu,
        redeSocial
        })
})

app.listen(8080, () =>{
    console.log("servidor ok!")
})