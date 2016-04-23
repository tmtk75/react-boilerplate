import { describe, it } from 'mocha';
import assert from 'power-assert';
import App from '../src/components/App.js';

describe('App', () => {
  describe('to24px', () => {
    it('appends "&s=24"', () => {
      assert(App.to24px('a') === 'a&s=24');
    });
  });
});
