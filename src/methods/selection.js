export default function* selection({ array, compare, swap }) {
  for (let i = 0; i < array.length; ++i) {
    let minIndex = i

    for (let j = i + 1; j < array.length; ++j) {
      if (compare(minIndex, j) > 0) {
        minIndex = j
      }
    }

    if (minIndex > i) {
      yield swap(i, minIndex);
    }
  }
}
