const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TestModel = require("./model/Test1");
const FormModel = require("./model/Form");
const router = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5174"],
    credentials: true,
    // methods: ("GET","POST")
  })
);
app.use(cookieParser());
app.use("/auth", router);
mongoose.connect("mongodb://localhost:27017/Studymate");

app.get("/getData", (req, res) => {
  TestModel.find()
    .then((careers) => res.json(careers))
    .catch((err) => res.json(err));
});

app.get("/getData3", (req, res) => {
  FormModel.find()
    .then((jobs) => res.json(jobs))
    .catch((err) => res.json(err));
});

app.post("/addJob", (req, res) => {
  FormModel.create(req.body)
    .then((jobs) => res.json(jobs))
    .catch((err) => res.json(err));
});

app.get("/getJob", (req, res) => {
  FormModel.find({})
    .then((jobs) => res.json(jobs))
    .catch((err) => res.json(err));
});

app.get("/getData2/:id", (req, res) => {
  const id = req.params.id;
  FormModel.findById({ _id: id })
    .then((jobs) => res.json(jobs))
    .catch((err) => res.json(err));
});

app.put("/updateData/:id", (req, res) => {
  const id = req.params.id;
  FormModel.findByIdAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      company: req.body.company,
      email: req.body.email,
      type: req.body.type,
      salary: req.body.salary,
      skills: req.body.skills,
      deadline: req.body.deadline,
    }
  )
    .then((jobs) => res.json(jobs))
    .catch((err) => res.json(err));
});

app.delete("/deleteData/:id", (req, res) => {
  const id = req.params.id;
  FormModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});
app.listen(process.env.PORT, () => {
  console.log("Server is Running ");
});
