import test from 'tape'
import convertPathToRegex from './converter.js'

test('convert path to regex', (t) => {
  t.equal(convertPathToRegex(''), '')
  t.equal(convertPathToRegex(' '), '')
  t.equal(convertPathToRegex(' x'), 'x')
  t.equal(convertPathToRegex('x '), 'x')
  t.equal(convertPathToRegex(' x '), 'x')
  t.equal(convertPathToRegex('x'), 'x')
  t.equal(convertPathToRegex('/x'), '/x')
  t.equal(convertPathToRegex('/xz'), '/xz')
  t.equal(convertPathToRegex('/x/'), '/x/')
  t.equal(convertPathToRegex('/x/z'), '/x/z')
  t.equal(convertPathToRegex('/x/z/'), '/x/z/')
  t.equal(convertPathToRegex('{'), '.*')
  t.equal(convertPathToRegex('{{'), '.*')
  t.equal(convertPathToRegex('{x}'), '.*')
  t.equal(convertPathToRegex('{{x}}}'), '.*')
  t.equal(convertPathToRegex('a/b/{c}/{d}/e/'), 'a/b/.*/.*/e/')
  t.end()
})
