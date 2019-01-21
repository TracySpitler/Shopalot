// include
const express = require('express');
const router = express.Router()

// default page
router.get('/', (req, res) => {
    res.send('Hello World!')
})

// set up router
module.exports = router;
