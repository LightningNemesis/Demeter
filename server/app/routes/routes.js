const dummy_data = require('./data.json')

module.exports = function(app, db) {
    app.get('/home', (req, res)=>{
        res.send(dummy_data)
    })
}