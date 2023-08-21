const assignment = require('../../src/assignment.js');
const axios = require('axios');

const { celsiusToFahrenheit } = assignment;
const maybe = celsiusToFahrenheit === undefined ? test.skip : test;

maybe('Challenge - 3 : celsiusToFahrenheit can convert array of numbers', async () => {
    const URL = 'https://randomapi.com/api/997f1c72e6b3685a1ca82c478dbfac78';
    const { data: { results } } = await axios.get(URL);
    const [randomTestData] = results;
    const { value, correctFunction } = randomTestData;

    expect(celsiusToFahrenheit(value)).toEqual(correctFunction);
});