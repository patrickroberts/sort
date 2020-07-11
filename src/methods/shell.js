export default function* shell({ array, compare, put }) {
  const gaps = [...sequence(array.length, tokuda)];

  for (let i = gaps.length - 1; i >= 0; --i) {
    const increment = gaps[i];

    for (let offset = 0; offset < increment && increment + offset < array.length; ++offset) {
      for (let j = offset + increment; j < array.length; j += increment) {
        const value = array[j];
        let k = j - increment;

        while (k >= 0 && compare(value, k) < 0) {
          yield put(k + increment, array[k]);
          k -= increment;
        }

        if (k + increment < j) {
          yield put(k + increment, value);
        }
      }
    }
  }
}

function* sequence(length, gaps) {
  for (let index = 0, gap; (gap = gaps(index)) < length; ++index) {
    yield gap;
  }
}

function tokuda(index) {
  return Math.ceil((9 * (9 / 4) ** index - 4) / 5);
}
