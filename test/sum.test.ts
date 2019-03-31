import sum from '../src/sum';
import * as assert from 'assert';

describe('test sum', () => {
    it('1 + 2 = 3', () => {
        assert.equal(sum(1, 2), 3);
    });
    it('0.1 + 0.2 = 0.3', () => {
        assert.equal(sum(0.1, 0.2), 0.3);
    });
});