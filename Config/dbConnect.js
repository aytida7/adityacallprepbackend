const express = require('express')
const app = express()
const port = 3500
const mongoose = require('mongoose');


const connectDB = async () => {
    
    try {
        await mongoose.connect(process.env.DATABASE_URI).then(()=>{
            console.log('connected to db');

        });
        
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB