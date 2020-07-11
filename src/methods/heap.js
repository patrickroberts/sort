export default function* heap({ array, compare, swap }) {
  for (let index = Math.floor((array.length - 1) / 2); index >= 0; --index) {
    yield* trickle(index, array.length);
  }

  for (let index = array.length - 1; index > 0; --index) {
    yield swap(0, index);
    yield* trickle(0, index);
  }

  function* trickle(i, upper) {
    if (i * 2 + 1 >= upper) return;

    if (compare(i, i * 2 + 1) < 0) {
      if (i * 2 + 2 >= upper || compare(i * 2 + 1, i * 2 + 2) > 0) {
        yield swap(i, i * 2 + 1);
        yield* trickle(i * 2 + 1, upper);
      }
    }

    if (i * 2 + 2 >= upper) return;

    if (compare(i, i * 2 + 2) < 0) {
      yield swap(i, i * 2 + 2);
      yield* trickle(i * 2 + 2, upper);
    }
  }
}
