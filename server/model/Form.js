const mongoose =require('mongoose');

const FormSchema = new mongoose.Schema({
    title:{type: String },
    company:{type: String},
    email:{type: String, required: true, unique: true},
    salary:{type: String},
    type:{type: String},
    deadline:{type: String},
    skills:{type: String}
})
const FormModel = mongoose.model('jobs',FormSchema)
module.exports = FormModel