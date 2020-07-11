export default function* bubble({ array, compare, swap }) {
  for (let i = array.length; i > 0; --i) {
    for (let j = 1; j < i; ++j) {
      if (compare(j - 1, j) > 0) {
        yield swap(j - 1, j);
      }
    }
  }
}
