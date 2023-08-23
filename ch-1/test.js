const assignment = require('../../src/assignment.js');
const axios = require('axios');

const { sumOfNumbersTo } = assignment;
const maybe = sumOfNumbersTo === undefined ? test.skip : test;

maybe('Challenge - 1 : sumOfNumbersTo can sum the numbers from 1 to destination', async () => {
    const URL = 'https://randomapi.com/api/tcp8cz29?key=1YGT-X0VZ-V2PC-TUK8';
    const { data: { results } } = await axios.get(URL);
    const [randomTestData] = results;
    const { value, correctFunction } = randomTestData;

    expect(sumOfNumbersTo(value)).toBe(correctFunction);
});