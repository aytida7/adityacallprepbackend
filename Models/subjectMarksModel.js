const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectMarkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    marks: {
        physics: {
            type: [Number],
            required: true
        },
        chemistry: {
            type: [Number],
            default:[0,0]
        },
        maths: {
            type: [Number],
            required: true
        }
    }
    
    
});

module.exports = mongoose.model('subjectMarksModel', subjectMarkSchema);





