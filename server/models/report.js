const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema ({
    name: {
        type: String,
        unique: true
    },
    image: { 
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true,
    },
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;