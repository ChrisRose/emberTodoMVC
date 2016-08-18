export default function shouldHaveElementWithCount (assert, selector, context, n) {
  const count = find(selector, context).length;
  assert.equal(n, count, `found ${count} times`);
}
