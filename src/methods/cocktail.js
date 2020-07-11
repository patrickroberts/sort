export default function* cocktail({ array, compare, swap }) {
  let begin = 0;
  let end = array.length - 1;

  while (begin < end) {
    let nextBegin = end;
    let nextEnd = begin;

    for (let index = begin; index < end; ++index) {
      if (compare(index, index + 1) > 0) {
        yield swap(index, index + 1);
        nextEnd = index;
      }
    }

    for (let index = end; index > begin; --index) {
      if (compare(index - 1, index) > 0) {
        yield swap(index - 1, index);
        nextBegin = index;
      }
    }

    begin = nextBegin;
    end = nextEnd;
  }
}
