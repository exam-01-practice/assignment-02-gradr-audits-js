const assignment = require('../../src/assignment.js');
const axios = require('axios');

const { countEvenNumbersWithin } = assignment;
const maybe = countEvenNumbersWithin === undefined ? test.skip : test;

maybe('Challenge - 2 : countEvenNumbersWithin can count, sum, arrayOfEvenNumbers from 1 to destination', async () => {
    const URL = 'https://randomapi.com/api/3ba71dfdc0144abba3452e039f210123';
    const { data: { results } } = await axios.get(URL);
    const [randomTestData] = results;
    const { value, correctFunction } = randomTestData;

    expect(countEvenNumbersWithin(value)).toStrictEqual(correctFunction);
});