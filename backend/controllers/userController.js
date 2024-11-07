import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) return res.json({ success: false, message: "User does not exist" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.json({ success: false, message: "Invalid credentials" });

        const token = createToken(user._id);
        res.json({ success: true, token, message: "Login successful" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exists = await userModel.findOne({ email });
        if (exists) return res.json({ success: false, message: "User already exists" });

        if (!validator.isEmail(email)) return res.json({ success: false, message: "Please enter a valid email" });
        if (password.length < 8) return res.json({ success: false, message: "Please enter a strong password" });

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({ name, email, password: hashPassword });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.json({ success: true, token, message: "Admin logged in successfully" });
        } else {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};