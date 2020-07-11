export default function* insertion({ array, compare, put }) {
  for (let i = 1; i < array.length; ++i) {
    let j = i - 1;
    const value = array[i];

    while (j >= 0 && compare(value, j) < 0) {
      yield put(j + 1, array[j--]);
    }

    if (j + 1 < i) {
      yield put(j + 1, value);
    }
  }
}
