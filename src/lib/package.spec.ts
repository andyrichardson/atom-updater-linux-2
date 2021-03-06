import { expect } from 'chai';
import Package from './package';

it('should construct', () => {
  expect(new Package()).to.be.an('object');
});

let pkg;

beforeEach(() => {
  pkg = new Package();
});

it('should have an activate method', () => {
  expect(pkg.activate).to.be.an('function');
});

it('should have an addSubscriptions method', () => {
  expect(pkg.addSubscriptions).to.be.an('function');
});
