const mongoose = require('mongoose')

const categoriesSchema = mongoose.Schema({
    Categoriename: String

});

const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = Categories;