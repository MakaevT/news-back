const express = require('express')
const categoriesController = require('../models/controllers/Category.controller')


const app = express()

app.post('/categories/', categoriesController.postCategories)

app.get('/categories', categoriesController.getCategories)

app.delete('/categories/:id', categoriesController.deleteCategories)

module.exports = app