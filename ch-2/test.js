const assignment = require('../../src/assignment.js');
const axios = require('axios');

const { countEvenNumbersWithin } = assignment;
const maybe = countEvenNumbersWithin === undefined ? test.skip : test;

maybe('Challenge - 2 : countEvenNumbersWithin can count even numbers in array of numbers', async () => {
    const URL = 'https://randomapi.com/api/3ba71dfdc0144abba3452e039f210123';
    const { data: { results } } = await axios.get(URL);
    const [randomTestData] = results;
    const { value, correctFunction } = randomTestData;

    expect(countEvenNumbersWithin(value)).toBe(correctFunction);
});