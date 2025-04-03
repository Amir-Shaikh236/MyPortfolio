const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: ["https://my-portfolio-eight-theta-75.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(bodyParser.json());

app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to send email.", error });
    }
});


mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB is Connected.")).catch((err) => console.error(err));

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String,
    lang: {
        common_lang: String,
        style: String,
        Backend_lang: String,
        Database: String,
    },
})
const projectModel = mongoose.model("project", projectSchema);

app.get("/api/projects", async (req, res) => {
    try {
        const projects = await projectModel.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Error fetching projects from DB", error });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
