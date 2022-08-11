import test from 'tape'
import convertPathToRegex from "./converter.js";

test('timing test', t => {
    t.plan(1)
    t.equal(convertPathToRegex('/path'), '/path')
});