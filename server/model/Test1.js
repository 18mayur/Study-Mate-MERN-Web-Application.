const mongoose =require('mongoose')

const careerSchema = new mongoose.Schema({
    title: String,
    field: String,
    education:String,
    salary: String,
    rate:String

});

const TestModel =mongoose.model("careers",careerSchema)

module.exports = TestModel