const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    comentatorName: String,
    comentText: String,
    comentedNewId: Number

});

const News = mongoose.model('News', newsSchema);

module.exports = News;