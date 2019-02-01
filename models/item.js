// Item Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    imagePath: {
        type: String,
        default: "https://www.bestfunnies.com/wp-content/uploads/2012/10/Funny-Shopping-01.jpg",
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = Item = mongoose.model('item', ItemSchema);
