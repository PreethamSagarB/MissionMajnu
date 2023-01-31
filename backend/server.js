const express = require('express')
const mongoose = require('mongoose')
const routes = require('./router')

const app = express()
const PORT = 8000

mongoose.connect('mongodb+srv://PreethamSagar091315:TinnuJunnu%408919243774@missionmajnucluster.pnec7le.mongodb.net/test').then(() => {
    app.use('/', routes)
    app.listen(PORT, () => { console.log('Listening on port ' + PORT) })
})