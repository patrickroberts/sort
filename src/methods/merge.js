export default function createMerge({ array, compare, put }) {
  return function* merge(begin, middle, end) {
    const first = array.slice(begin, middle);
    const last = array.slice(middle, end);

    let i = 0;
    let j = 0;

    for (let index = begin; index < end; ++index) {
      if (j === last.length) {
        yield put(index, first[i++]);
      } else if (i === first.length) {
        yield put(index, last[j++]);
      } else if (compare(first[i], last[j]) <= 0) {
        yield put(index, first[i++]);
      } else {
        yield put(index, last[j++]);
      }
    }
  };
}
