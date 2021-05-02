'use strict';

const express = require('express');

const Thing = require('../models/things.js');
const things = new Thing();

const router = express.Router();

router.get('things', getThings);
router.get('/things/:id', getOneThing);
router.post('/things', createThing);
router.put('things/:id', updateThing);
router.delete('/things/:id', deleteThing);

function getThings(req, res) {
  let getAllThings = things.read();
  res.status(200).json(getAllThings);
}

function getOneThing(req, res) {
  const id = parseInt(req.params.id);
  let theThing = things.read(id);
  res.status(200).json(theThing);
}

function createThing(req, res) {
  let content = req.body;
  let createdThing = things.create(content);
  res.status(201).json(createdThing);
}

function updateThing(req,res) {

}

function deleteThing(req,res) {

}

module.exports = router;