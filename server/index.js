require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const app = express()
// For sending requests from client
app.use(cors())
// For parsing JSON
app.use(express.json())
app.use('/api', router)

//Handling errors, must be last Middleware!
app.use(errorHandler)

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
