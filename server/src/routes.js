module.exports = (app) => {
    app.post('/register', (req, res) => {
        res.send(`Hello ${req.body.username}, you are registered!`)
    })
}
