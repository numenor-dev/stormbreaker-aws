const express = require('express');
const Report = require('../models/report');
const cors = require('./cors');

const reportRouter = express.Router();

reportRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => {
        Report.find(req.query)
        .then(reports => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(reports);
        })
        .catch(err => next(err));
    })
.post(cors.corsWithOptions, (req, res, next) => {
    Report.create(req.body)
    .then(report => {
        console.log('Report Created ', report);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(report);
    })
    .catch(err => next(err));
});

reportRouter.route('/:reportId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => {
        Report.findById(req.params.reportId)
        .then(report => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(report);
        })
        .catch(err => next(err));
    })
    

module.exports = reportRouter;