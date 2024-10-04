const mongoose =require('mongoose');

const jobSchema = new mongoose.Schema({
    username:{type: String, required: true, unique: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true}
})
const JobModel = mongoose.model('recruiter',jobSchema)
module.exports = JobModel