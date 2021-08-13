
const express = require("express");
const router = express.Router();
const Eight = require('../model/Eight');
const Nine = require('../model/Nine');
const Ten = require('../model/Nine');
const Eleven = require('../model/Nine');
const Twelve = require('../model/Nine');


router.get('/eight', (req, res) => {
    Eight.find((err, data) => {
        if(err) throw err;
        res.send(data)
    })
})


router.post('/eight', (req,res) => {
    Eight.create(req.body, (err, data) => {
        if(err) throw err;
        res.send(data)
    })
})

router.get('/nine', (req, res) => {
    Nine.find((err, data) => {
        if(err) throw err;
        res.send(data)
    })
})


router.post('/nine', (req,res) => {
    Nine.create(req.body, (err, data) => {
        if(err) throw err;
        res.send(data)
    })
})

router.get('/ten', (req, res) => {
    Ten.find((err, data) => {
        if(err) throw err;
        res.send(data)
    })
})


router.post('/ten', (req,res) => {
    Ten.create(req.body, (err, data) => {
        if(err) throw err;
        res.send(data)
    })
})

router.get('/eleven', (req, res) => {
    Eleven.find((err, data) => {
        if(err) throw err;
        res.send(data)
    })
})


router.post('/eleven', (req,res) => {
    Eleven.create(req.body, (err, data) => {
        if(err) throw err;
        res.send(data)
    })
})

router.get('/twelve', (req, res) => {
    Twelve.find((err, data) => {
        if(err) throw err;
        res.send(data)
    })
})


router.post('/twelve', (req,res) => {
    Twelve.create(req.body, (err, data) => {
        if(err) throw err;
        res.send(data)
    })
})

module.exports = router;