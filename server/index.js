require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000

const app = express()

//Function for connecting to database
const start = async () => {
    try {
        //Connecting to database
        await sequelize.authenticate()
        //Comparing state database and schema data
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
