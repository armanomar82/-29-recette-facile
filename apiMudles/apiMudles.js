const mongoose = require('mongoose');

const apiSchema = mongoose.Schema({
    name : { 
        type : String,
        required :[true, 'A tour must have a name'],
        unique : true
    },
    duration:{
        type :Number,
        required : [true, 'A tour must have duration']
    },
    Date : [Date]
});

const Tour = mongoose.model('Api', apiSchema);
module.exports = Tour;