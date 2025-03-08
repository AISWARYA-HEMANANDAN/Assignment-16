const User = require("../model/userModel")
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    try {
        const { name, email, password, age } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({name, email, password:hashedPassword, age})
        const saved = await newUser.save()
        res.status(201).json({message:"User created", saved})

    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "Internal server error" })
    }
}
module.exports = {register}