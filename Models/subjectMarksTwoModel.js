const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectMarkTwoSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    years_old: {
        type: Number,
        required: true
    },
    scores: {
        subjects: {
            type: [String],
            required: true
        },
        marks_obtained: {
            type: [Number],
            required: true
        },
        total_marks: {
            type: [Number],
            required: true
        }
    }
    
    
});

module.exports = mongoose.model('subjectMarksTwoModel', subjectMarkTwoSchema);



