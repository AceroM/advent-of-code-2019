const assert = require('assert');
const run = require('../run');

describe('AdventOfCode2019 day1', () => {
  it('day 1, part 1', () => {
    const actual = run(1, 1);
    const expected = 3389778;

    assert.strictEqual(expected, actual);
  });

  it('day 2, part 2', () => {
    const actual = run(1, 2);
    const expected = 5081802;

    assert.strictEqual(expected, actual);
  });
});
