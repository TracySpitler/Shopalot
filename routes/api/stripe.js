const express = require('express');
const router = express.Router();

// @route POST api/stripe
// @desc Stripe
// @access Public
router.post('/account/get', (req, res, next) => {
  const stripeAccountId = process.env.STRIPE_KEY;

  if (!stripeAccountId) {
    res.json({
      success: true,
      message: 'Missing stripe account.',
      isLoaded: false
    })
  }
  else {
    res.json({
      success: true,
      message: 'Stripe account.',
      isLoaded: true
    })
  }
});

// @route POST api/stripe
// @desc Stripe
// @access Public
router.post('/account/transactions', (req, res, next) => {

  var stripe = require("stripe")("sk_test_WduJXqLNN4NVD1G4D84RRA2n");

  var charges = stripe.charges.list({
    limit: 3
  });

  res.json({
    success: true,
    message: "Successful transaction",
    isLoaded: true,
    charges: charges
  })

});

// @route POST api/items
// @desc Create an Item
// @access Public
router.post('/account/purchase', (req, res) => {
  stripe.charges.create({
    amount: req.body.total,
    currency: "usd",
    source: "tok_mastercard", // obtained with Stripe.js
    description: "Charge for " + req.body.email
  },
  function(err, charge) {
      // asynchronously called
      res.json({
        success: true,
        message: "Successful transaction",
        isLoaded: true,
        err: err
      })
  });

});

// set up router
module.exports = router;
