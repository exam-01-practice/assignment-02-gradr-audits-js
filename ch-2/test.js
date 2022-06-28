const assignment = require('../../src/assignment.js');
const axios = require('axios');

const { countEvenNumbers } = assignment;
const maybe = countEvenNumbers === undefined ? test.skip : test;

maybe('Challenge - 2 : countEvenNumbers can count even numbers in array of numbers', async () => {
    const URL = 'https://randomapi.com/api/cbf64d1c63a822f6e335ce671ff42b20';
    const { data: { results } } = await axios.get(URL);
    const [randomTestData] = results;
    const {numbers, totalEvenNums} = randomTestData;

    expect(countEvenNumbers(numbers)).toBe(totalEvenNums);
});