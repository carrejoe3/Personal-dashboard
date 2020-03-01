const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))
app.use(cors())

const routes = require('./routes')

app.use('', routes)

app.listen(config.port, () => console.log(`Server started on port ${config.port}`))
