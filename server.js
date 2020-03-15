const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('.'))
app.use(bodyParser.json())
app.use(bodyParser.text())
 
app.get('/', (req, res) => {
    res.render("index.html")
})

app.post('/', (req, res) => {
    const name = req.body.name;
    const telefone = req.body.telefone;
    const conheceu = req.body.conheceu;
    const redeSocial = [req.body.facebook, req.body.linkedin, req.body.instagram]
    
    res.json({ 
        name,
        telefone,
        conheceu,
        redeSocial
        })
})

app.listen(8080, () =>{
    console.log("servidor ok!")
})