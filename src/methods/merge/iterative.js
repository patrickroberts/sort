import createMerge from '../merge';

export default function* iterative({ array, compare, put }) {
  const merge = createMerge({ array, compare, put });

  for (let increment = 1; increment < array.length; increment *= 2) {
    for (let begin = 0; begin < array.length; begin += increment * 2) {
      const middle = begin + increment;
      const end = Math.min(begin + increment * 2, array.length);

      yield* merge(begin, middle, end);
    }
  }
}
