const mongoDB = require('mongodb')

module.exports = (app) => {
  app.post('/register', async (req, res) => {
    const users = await loadUsersCollection()
    res.send(await users.find({}).toArray())
  })
}

async function loadUsersCollection () {
  const client = await mongoDB.MongoClient.connect('mongodb+srv://dbUser:3d3nC0urt@personaldashboard-irjzv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
  })

  return client.db('PersonalDashboard').collection('users')
}
