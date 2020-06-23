const { assert } = require('chai');
const Calculator = require('../../app/Calculator');

describe('Calculator simple', () => {
  it('3 + 4 + 5 = 12', () => {
    assert.equal(Calculator.add([3, 4, 5]), 12, `3 + 4 + 5 should be equal 12`);
  });
  it('3 * 4 * 5 = 60', () => {
    assert.equal(Calculator.multiply([3, 4, 5]), 60, `3 * 4 * 5 should be equal 60`);
  });
});
