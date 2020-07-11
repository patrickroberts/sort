export default function* smooth({ array, compare, swap }) {
  const sizes = new LeonardoHeapArray();

  for (let i = 0; i < array.length; ++i) {
    sizes.push();
    yield* trickle(i, sizes.peek());
  }

  for (let i = array.length - 1; i >= 0; --i) {
    yield* rootSort(sizes);
    sizes.pop();
  }

  function* rootSort(sizes) {
    let index = leonardo(sizes.get(0)) - 1;

    for (let i = 1; i < sizes.length; ++i) {
      let k = index;

      index += leonardo(sizes.get(i));

      let base = index;
      let right = base - 1;
      let left = right - leonardo(sizes.get(i) - 2);

      for (let j = i - 1; j >= 0 && compare(k, base) > 0; --j) {
        if (sizes[j + 1] >= 2) {
          if (compare(k, right) < 0) {
            break;
          }

          if (compare(k, left) < 0) {
            break;
          }
        }

        yield swap(k, base);
        yield* trickle(k, sizes.get(j));

        base = k;
        right = base - 1;
        left = right - leonardo(sizes.get(j) - 2);
        k -= leonardo(sizes.get(j));
      }
    }
  }

  function* trickle(base, size) {
    if (size < 2) return;

    const right = base - 1;
    const left = right - leonardo(size - 2);

    if (compare(base, right) < 0 && compare(right, left) > 0) {
      yield swap(base, right);
      yield* trickle(right, size - 2);
    }

    if (compare(base, left) < 0) {
      yield swap(base, left);
      yield* trickle(left, size - 1);
    }
  }
}

class LeonardoHeapArray {
  array = [];

  get length() {
    return this.array.length;
  }

  get(index) {
    return this.array[index];
  }

  splice(start, deleteCount, item) {
    return this.array.splice(start, deleteCount, item);
  }

  peek(index = -1) {
    return this.array[this.length + index];
  }

  push() {
    if (this.length > 1 && this.peek(-2) - this.peek() === 1) {
      this.splice(-2, 2, this.peek(-2) + 1);
    } else if (this.length > 0 && this.peek() === 1) {
      this.array.push(0);
    } else {
      this.array.push(1);
    }
  }

  pop() {
    const size = this.array.pop();

    if (size > 1) {
      this.array.push(size - 1, size - 2);
    }
  }
}

const sqrt5 = Math.sqrt(5);
const phi = (1 + sqrt5) / 2;
const psi = (1 - sqrt5) / 2;

function leonardo(index) {
  return Math.round((2 / sqrt5) * phi ** (index + 1) - psi ** (index + 1) - 1);
}
