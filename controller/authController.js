// This will help us connect to the database
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
exports.handleRegister = async function (req, res) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const user = new User({
            email: req.body.email,
            password: hashedPassword,
            role: "user",
        });
        const result = await user.save()
        res.status(201).send({
            message: "User Created Successfully",
            result,
        });
    } catch (error) {
        res.status(500).send({
            message: "Error creating user",
            error,
        });
    }
};
exports.handleLogin = async function (req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            const isValidPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (isValidPassword) {
                const token = jwt.sign(
                    { email: req.body.email },
                    process.env.SECRET_KEY,
                    { expiresIn: "1h" }
                );
                return res.status(200).send({
                    message: "Login Successful",
                    email: user.email,
                    role: user.role,
                    token,
                });
            }else{
                return res.status(401).json({error: "password not matched!"})
            }
        }else{
            return res.status(401).json({error: "user not found"})
        }
    } catch (error) {
        return res.status(401).json({error: 'user not found'})
    }
};

