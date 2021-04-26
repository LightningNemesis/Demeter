const demeterRoutes = require('./routes')

module.exports = function(app, db) {
    demeterRoutes(app, db)
}