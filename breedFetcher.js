const request = require('request');

const baseUrl = 'https://api.thecatapi.com/v1';
const errBaseUrl = 'https://api.thecatapi.co/v1';

const fetchBreedDescription = (breedName, cb) => {
  request.get(`${baseUrl}/breeds/search?q=${breedName}`, (err, res, body) => {
    if (err) return cb(err, null);

    const data = JSON.parse(body);

    if (!data.length) {
      return cb('not found', null);
    } else {
      return cb(null, data[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};
