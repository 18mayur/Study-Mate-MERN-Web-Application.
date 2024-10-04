// import express from 'express';
const express = require('express');
const bcryt = require('bcrypt');
const router = express.Router();
const UserModel = require('../model/User');
const JobModel = require('../model/Job');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const user = await UserModel.findOne({ email })
    if (user) {
        return res.json({ message: "user already existed " })
    }
    const hashpass = await bcryt.hash(password, 10)
    const newUser = new UserModel({
        username,
        email,
        password: hashpass,
    })
    await newUser.save()
    return res.json({ status: true, message: "Record Registered" })
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email })
    if (!user) {
        return res.json({ message: "User is not Registered" })
    }

    const validPassword = await bcryt.compare(password, user.password)
    if (!validPassword) {
        return res.json({ message: 'Password is incorrect' })
    }

    const token = jwt.sign({ username: user.username}, process.env.KEY, { expiresIn: '1h' })
    res.cookie('token', token, { httpOnly: true, maxAge: 360000 })
    return res.json({ status: true, message: 'Login Successfully ' })

})

const verifyUser = async (req, res, next) => {
    const token = req.cookies.token;
    try {
        if (!token) {
            return res.json({ status: false, message: 'No token' })
        }
        const decoded = await jwt.verify(token,process.env.KEY);
        next()
    } catch (err) {
        return res.json(err)
    }
}

router.get('/verify',verifyUser, (req, res) => {
    return res.json({status:true,message:"verifyed user "})
});

router.get('/logout',(req,res)=>{
    res.clearCookie('token');
    return res.json({status: true ,message: 'cookie clear'})
});

// Recruiter signup and Login Routes 

router.post('/signup1', async (req, res) => {
    const { username, email, password } = req.body;
    const user = await JobModel.findOne({ email })
    if (user) {
        return res.json({ message: "user already existed " })
    }
    const hashpass = await bcryt.hash(password, 10)
    const newUser = new JobModel({
        username,
        email,
        password: hashpass,
    })
    await newUser.save()
    return res.json({ status: true, message: "Record Registered" })
})

router.post('/login1', async (req, res) => {
    const { email, password } = req.body;
    const user = await JobModel.findOne({ email })
    if (!user) {
        return res.json({ message: "User is not Registered" })
    }

    const validPassword = await bcryt.compare(password, user.password)
    if (!validPassword) {
        return res.json({ message: 'Password is incorrect' })
    }

    const token = jwt.sign({ username: user.username}, process.env.KEY, { expiresIn: '1h' })
    res.cookie('token', token, { httpOnly: true, maxAge: 360000 })
    return res.json({ status: true, message: 'Login Successfully ' })

})
// module.exports.router= UserRouter;
module.exports = router
// export {router }