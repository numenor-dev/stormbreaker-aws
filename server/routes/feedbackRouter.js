const express = require('express');
const Feedback = require('../models/feedback');
const cors = require('./cors');

const feedbackRouter = express.Router();

feedbackRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => {
        Feedback.find(req.query)
        .then(feedback => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(feedback);
        })
        .catch(err => next(err));
    })

    .post(cors.corsWithOptions, (req, res, next) => {
        Feedback.create(req.body)
        .then(feedback => {
            console.log('Thank you for your feedback! ', feedback);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(feedback);
        })
        .catch(err => next(err));
    })
    .put(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /feedbacks');
    })
    

module.exports = feedbackRouter;