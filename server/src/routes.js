const mongoDB = require('mongodb')

module.exports = (app) => {
  app.post('/register', async (req, res) => {
    const users = await loadUsersCollection()
    await users.insertOne({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      createdAt: new Date()
    })
    res.status(201).send()
  })
}

async function loadUsersCollection () {
  const client = await mongoDB.MongoClient.connect('mongodb+srv://dbUser:3d3nC0urt@personaldashboard-irjzv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
  })

  return client.db('PersonalDashboard').collection('users')
}
