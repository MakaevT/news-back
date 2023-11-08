const express = require('express')
const newsComsController = require('../models/controller/newsComs.for.news.controller')

const app = express()

app.post('/comment/:id', newsComsController.postnewsComsSpecificNews)

app.delete('/comment/:id', commentsControlles.deletenewsComs)

app.get('/comment/:id', commentsControlles.getAllnewsComsSpecificNews)

module.exports = app