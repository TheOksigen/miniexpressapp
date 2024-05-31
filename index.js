const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send("Salam")
})
app.post("/",  (req, res)=> {
    const {name} = req.body
    return name
})
app.listen(3000)