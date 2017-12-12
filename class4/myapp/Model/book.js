var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var BookListSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    Year: number,

    time: {
        type: Date,
        default: Date.now
    }
});

var BookSchema = mongoose.model('BookSchema', BookListSchema);
module.exports = BookSchema;