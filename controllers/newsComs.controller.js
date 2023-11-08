const NewsComs = require("../NewsComs.for.news.model");

const newsComsController = {
    deleteComment: async (req, res) => {
        try {
            const comment = await Comments.findByIdAndRemove(req.params.id)
            res.json(comment)
        } catch (error) {
            res.json(error)
        }
    },
    postCommentSpecificNews: async (req, res) => {
        try {
            const comment = await Comments.create({newsId: req.params.id})
            res.json(comment)
        } catch (error) {
            res.json(error)
        }
    },
    getAllCommentsSpecificNews: async (req, res) => {
        try {
            const comment = await Comments.findById({newsId: req.params.id})
            res,json(comment)
        } catch (error) {
            res.json(error)
        }
    }
};

module.exports = newsComscontroller