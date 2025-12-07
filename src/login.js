const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // MongoDB URI (adjust if hosted remotely)
const client = new MongoClient(uri);

let db;
client.connect()
    .then(() => {
        db = client.db("anshika"); // Your database name
        console.log("Connected to the 'anshika' database!");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send("Username and Password are required.");
        }

        const loginData = { username, password, loginTime: new Date() };
        const result = await db.collection("logins").insertOne(loginData);

        console.log("Login data saved:", result.insertedId);
        res.status(200).send("Login successful and data saved.");
    } catch (error) {
        console.error("Error saving login data:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
