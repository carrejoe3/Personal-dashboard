const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const path = require('path')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))
app.use(cors())

const routes = require('./routes')

app.use('', routes)

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(path.join(__dirname, '/public/')))

  // Handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
  })
}

app.listen(config.port, () => console.log(`Server started on port ${config.port}`))
