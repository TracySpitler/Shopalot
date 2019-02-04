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
        default: "https://picsum.photos/400/200/?random",
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = Item = mongoose.model('item', ItemSchema);
