'use strict';

const sql = require('./../../../db');
// router setup
const express = require('express');
const router = express.Router({ mergeParams: true });

function handleError(res, error) {
    res.status(500);
    res.end(JSON.stringify({
        message: "A SQL error occurred.",
        error: error.sqlMessage
    }));
}


router.get('/test', (req, res, next) => {
    // body requests
    console.log(req.body);
    // query parameters
    console.log(req.query);
    sql.query(`SELECT * FROM user;`, function (error, result) {
        res.setHeader('Content-Type', 'application/json');
        if (error) return handleError(res, error);
        res.end(JSON.stringify(result));
    });
});


router.post('/', (req, res, next) => {
    // Create the sql that inserts a new user into the database. The data is gotten from the req.body
    // Find the fields from the database-node-api.sql
});


router.get('/:id', (req, res, next) => {
    // Create the sql that returns all users

    /**
     * If a specific query parameter is specified, return specific users in a specific way:
     * api/users?country=denmark should return users that come from denmark
     * api/users?sort=name&order=asc should return users sorted after the sort query parameter should be ordered after the order query parameter
     * api/users?age=31 should return users that are 31
     * api/users?min-age=29&max-age=31 should return users that are between 29 and 31
     */
});


router.get('/:email', (req, res, next) => {
    // get the email after api/users/some-email
    console.log(req.params.email)
    // Create the sql that returns a specific user matching the email
});


router.put('/:email', (req, res, next) => {
    // Create the sql that updates information about a user matching the email
});


router.delete('/:email', (req, res, next) => {
    // Create the sql that removes the user matching the email
});


module.exports = router;
