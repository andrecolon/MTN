const express = require('express');
const TorahMenNetwork = require('./tmn-models');
//const db = require("../config/dbconfig")
const router = express.Router();

router.get('/', (req, res) => { //working - http://localhost:4000/api/TorahMenNetwork/
    TorahMenNetwork.find()
        .then(tmn => {
            res.json(tmn);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get TorahMenNetwork' });
        });
});


router.get('/phone', (req, res) => {
    TorahMenNetwork.findByPhone()
        .then(cls => {
            if (cls.length > 0) {
                res.status(200).json({ classtype: cls });
            } else {
                res.status(400).json({ err: 'there is a big error' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Error getting class type', error: err.message });
        });
});

router.get('/name', (req, res) => {
    TorahMenNetwork.findByName()
        .then(time => {
            res.json({ classTime: time });
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get class time', error: err.message });
        });

})

router.get('/email', (req, res) => {
    TorahMenNetwork.findByEmail()
        .then(inst => {
            res.json({ instensityLVL: inst });
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get class time', error: err.message });
        });

})

router.get('/region', (req, res) => {
    TorahMenNetwork.findByRegion()
        .then(inst => {
            res.json({ dateLocation: inst });
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get class time', error: err.message });
        });

})

router.get('/congregation', (req, res) => {
    TorahMenNetwork.findByCongregation()
        .then(inst => {
            res.json({ duration: inst });
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get class time', error: err.message });
        });

})


module.exports = router;