require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3500
const dbConnect=require('./Config/dbConnect')


dbConnect();
app.use(express.json());


app.use('/subjectMarks',require('./Routes/api/subjectMarksApi'))
app.use('/subjectTwoMarks',require('./Routes/api/subjectMarksTwoApi'))
app.use('/getSudentDetails',require('./Routes/api/getAllStudentsApi'))


// connectin Database to backend

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
}); 