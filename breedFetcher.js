const request = require('request');
const args = process.argv.slice(2);

const baseUrl = 'https://api.thecatapi.com/v1';
const errBaseUrl = 'https://api.thecatapi.co/v1';

const breed = args[0];
//breeds
request.get(`${baseUrl}/breeds/search?q=${breed}`, (err, res, body) => {
  if (err) return console.log(err);
  const data = JSON.parse(body);
  if (!data.length) {
    return console.log('not found');
  } else {
    console.log(data[0].description);
  }
});
