const express = require('express')
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())
const router = require("./config/routes")
const db= require("./config/db")
app.use("/", router)


app.listen(3001, () => {
    console.log("App is listening on port 3001");
})

