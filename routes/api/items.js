const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {

  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route GET api/items
// @desc Get ONE Item
// @access Public
router.get('/:id', (req, res) => {

  Item.findById(req.params.id)
    .then(item => res.json(item));
});

// @route POST api/items
// @desc Create an Item
// @access Public
router.post('/', (req, res) => {

  const newItem = new Item({
    name: req.body.name,
    price: req.body.price,
    imagePath: req.body.imagePath,
    description: req.body.description
  });

  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items
// @desc Delete an Item
// @access Public
router.delete('/:id', (req, res) => {

  Item.findById(req.params.id)
    // Callback returns a successful or unsuccessful item deletion
    .then(item => item.remove().then(() => res.json({success: "Item deleted successfully"})))
    .catch(err => res.status(404).json({error: "Error when deleting item"}));
})

module.exports = router;
