import test from 'ava';
import {spy} from 'sinon';
import preventUnload, {cancel} from '../';

test('`preventUnload` is a function', (t) => {
  t.is(typeof preventUnload, 'function');
});

test('`cancel` is a function', (t) => {
  t.is(typeof cancel, 'function');
});

test('`preventUnload()` returns function', (t) => {
  const ref = preventUnload();

  t.is(typeof ref, 'function');
});

test('`preventUnload(message)` returns function', (t) => {
  const ref = preventUnload('Are you sure?');

  t.is(typeof ref, 'function');
});

test('`preventUnload()` prevents page unloading', (t) => {
  const pageUnloadSpy = spy(window, 'addEventListener');
  const ref = preventUnload();

  t.true(pageUnloadSpy.withArgs('beforeunload', ref).calledOnce);
});

test('`cancel(ref)` cancels page unloading prevention', (t) => {
  const pageUnloadSpy = spy(window, 'removeEventListener');
  const ref = preventUnload();

  cancel(ref);

  t.true(pageUnloadSpy.withArgs('beforeunload', ref).calledOnce);
});
