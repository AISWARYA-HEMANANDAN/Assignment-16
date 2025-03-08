const express = require('express')
const app = express()
// const userRoutes = require('./routes/userRoutes')
const dbConnection = require('./config/dbConnection')

dbConnection()

app.use(express.json())
// app.use("/user", userRoutes)

app.listen(5000, () => {
    console.log('Server starts on port 4000');

})