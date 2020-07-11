import createMerge from '../merge';

export default function* recursive({ array, compare, put }) {
  const merge = createMerge({ array, compare, put });

  yield* recurse(0, array.length);

  function* recurse(begin, end) {
    const middle = Math.ceil((begin + end) / 2);

    if (middle - begin > 1) {
      yield* recurse(begin, middle);
      yield* recurse(middle, end);
    }

    yield* merge(begin, middle, end);
  }
}
