// require("dotenv").config({path: "./env"});


import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

connectDB();



















/*
import express from "express";
const app = express();
;(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("Error talking to express", (err) => {
            console.error("Express error:", err);
            throw err;
        })

        console.log("Connected to MongoDB successfully");
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);   
        })

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})()
*/