const { model, models } = require('mongoose')
const News = require('../News.model');
const Categories = require('../models/categories.model');

const newsController = {
    postNews: async(req, res) => {
        try {
            const news = await News.create({
                title: req.body.title,
                text: req.body.text,
                categoryId: req.body.categoryId
            })
            res.json(news)
        } catch (error) {
            res.json(error)
        }
    },
    deleteNews: async (req, res) => {
        try {
            const news = await News.findByIdAndRemove(req.params.id)
            res.json(news)
        } catch (error) {
            res.json(error)
        }
    },

    getCategories: async (req, res) => {
        try {
            const categories = await Categories.findById()
            res.json(categories)
        } catch (error) {
            res.json(error)
        }
    }
};

module.exports = categoryControlles;

    

