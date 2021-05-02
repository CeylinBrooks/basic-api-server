'use strict';

module.exports = ( req, res, next) => {
  res.ststus(404).send('where\'s waldo?);
}