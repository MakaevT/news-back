const { model, models } = require('mongoose')
const News = require('../News.model')

const newsController = {
    postNews: async(req, res) => {
        try {
            const news = await news.create({
                title: req.body.title,
                text: req.body.text,
                categoriesId: req.body.categoriesId
            })
            res.json(news)
        } catch (error) {
            res.json(error)
        }
    },
    deleteNews: async (req, res) => {
        try {
            const news = await news.findByIdAndRemove(req.params.id)
            res.json(news)
        } catch (error) {
            res.json(error)
        }
    },
    patchNews: async(req, res) => {
        try {
            const news = await news.findByIdAndUpdate(req.params.id , {
                title: req.body.title,
                text: req.body.text,
                categoryId: req.body.categoryId
            })
            res.json(news)
        } catch (error) {
            res.json(error)
        }
    },
    getAllNews: async (req, res) => {
        try {
            const news = await news.find()
            res.json(news)
        } catch (error) {
            res.json(error)
        }
    },
    getSpecificNews: async (req, res) => {
        try {
            const news = await news.findById(req.params.id)
            res.json(news)
        } catch (error) {
            res,json(error)
        }
    }}
    
module.exports = newsController;