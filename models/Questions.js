const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    mcq : {
        questions : [{
            question_number : {
                type : Number,
                required: true
             },
             question_content : {
                type : String,
                required: true
             },
             answer : {
                type : String,
                required: true
             },
             answered_on : {
                 type : Date,
                 default: Date.now
             }
        }]
    }
    
});

module.exports = mongoose.model('Questions',QuestionSchema);