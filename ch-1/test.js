const assignment = require('../../src/assignment.js');
const axios = require('axios');

const { sumOfNumbers } = assignment;
const maybe = sumOfNumbers === undefined ? test.skip : test;

maybe('Challenge - 1 : sumNumbers can sum array of numbers', async () => {
    const URL = 'https://randomapi.com/api/f1efd3d4dd91ce0f744e7e1cf7b3c055';
    const { data: { results } } = await axios.get(URL);
    const [randomTestData] = results;
    const {numbers, numbersSum} = randomTestData;

    expect(sumOfNumbers(numbers)).toBe(numbersSum);
});