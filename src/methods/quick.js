export default function* quick({ array, compare, swap }) {
  yield* recurse(0, array.length - 1);

  function* recurse(begin, end) {
    let i = begin;
    let j = end;
    const pivot = array[Math.floor((i + j) / 2)];

    while (i < j) {
      while (array[i] !== pivot && compare(i, pivot) <= 0) {
        ++i;
      }

      while (array[j] !== pivot && compare(pivot, j) <= 0) {
        --j;
      }

      if (i < j) yield swap(i, j);
    }

    if (i === j) { ++i; --j; }
    if (j > begin) yield* recurse(begin, j);
    if (i < end) yield* recurse(i, end);
  }
}
