
const express = require('express');
const router = express.Router();
const Nine = require('../model/Nine');


router.get('/', (req, res) => {
    Nine.find((err, data) => {
        if(err) throw err;
        res.send(data)
    });
});


router.post('/', (req,res) => {
    Nine.create((req.body), (err, data) => {
        if(err) throw err;
        res.send(data)
    })
})


module.exports = router;
