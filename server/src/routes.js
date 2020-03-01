const mongoDB = require('mongodb')
const express = require('express')

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const users = await loadUsersCollection()
    await users.insertOne({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      photos: {},
      createdAt: new Date()
    })
    res.status(201).send()
  }
  catch (error) {
    res.status(500).send(error)
  }
})

router.post('/login', async (req, res) => {
  try {
    const users = await loadUsersCollection()
    res.send(await users.find({
      'username': req.body.username,
      'password': req.body.password
    }).toArray())
  }
  catch (error) {
    res.status(500).send(error)
  }
})

async function loadUsersCollection () {
  const client = await mongoDB.MongoClient.connect('mongodb+srv://dbUser:3d3nC0urt@personaldashboard-irjzv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
  })

  return client.db('PersonalDashboard').collection('users')
}

module.exports = router
