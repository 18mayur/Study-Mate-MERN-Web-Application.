// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const Job = require('./models/Job');

// const app = express();
// const PORT = process.env.PORT || 4000; // Choose any port you like

// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB database
// mongoose.connect('mongodb://localhost:27017/career_finder', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// })
// .then(() => {
//     console.log('MongoDB connected successfully');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// // Define API routes
// app.get('/api/jobs', async (req, res) => {
//   try {
//     const { field } = req.query;
//     const jobs = await Job.find({ field });
//     res.json(jobs);
//   } catch (error) {
//     console.error('Error fetching jobs:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const collection =require("./model/User");

const app =express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/UserData");

app.post("/",async(req,res)=>{
    const {email}=req.body;
    const data={
        email:email
    }
    await collection.insertMany([data]);
})

app.listen(4000, () =>{
    console.log("Server is Running ")
})