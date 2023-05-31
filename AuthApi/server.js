const express = require("express");
const cors = require("cors");
const usersModel = require("./model/usersModel");
const mongoose = require("mongoose");
const { json } = require("express");
const jsonwebtoken = require("jsonwebtoken")

const app = express();
const PORT = 2525;
app.use(cors());
app.use(json());

mongoose
    .connect("mongodb://127.0.0.1:27017/authDb")
    .then(() => console.log("DB is connected!!"));

app.get("/", (req, res) => {
    res.send("server in running on 2525");
});

app.post("/addusers", (req, res) => {
    const { name, username, password, phone, email } = req.body;
    const payload = {
        name,
        username,
        password,
        email,
        phone,
    };
    const newUser = new usersModel(payload);
    newUser.save();
    res.send("successfully registered the user.")
});

app.post("/login", async (req, res) => {
    const payload = req.body
    const { email } = req.body
    const result = await usersModel.find(payload)
    if (result.length > 0) {
        const token = jsonwebtoken.sign({ email }, "loginToken")
        const msg = "ok"
        res.json({ token, msg })
    } else {
        res.json({ msg: "Please Check user and password.." });
    }
});

app.get("/getotp", (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000)
    res.json({ otp })
})
app.listen(2525, () => {
    console.log("Server is running port: " + PORT);
});