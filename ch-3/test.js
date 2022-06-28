const assignment = require('../../src/assignment.js');
const axios = require('axios');

const { celsiusToFahrenheit } = assignment;
const maybe = celsiusToFahrenheit === undefined ? test.skip : test;

maybe('Challenge - 3 : celsiusToFahrenheit can convert array of numbers', async () => {
    const URL = 'https://randomapi.com/api/a250d3ad56839c442cfc61ba4f649007';
    const { data: { results } } = await axios.get(URL);
    const [randomTestData] = results;
    const {numbers, converted} = randomTestData;

    expect(celsiusToFahrenheit(numbers)).toEqual(converted);
});