import progress from './progress';

export default class Context {
  dirty = false;

  constructor(array, get, compare, method, criteria) {
    this.array = array;
    this.get = indexOrValue => {
      this.dirty = true;
      return get(this.value(indexOrValue));
    };
    this.compare = (a, b) => {
      this.dirty = true;
      return compare(this.value(a), this.value(b));
    };
    this.done = progress(method(this));
    this.criteria = criteria;
  }

  value(indexOrValue) {
    return typeof indexOrValue === 'number'
    ? this.array[indexOrValue]
    : indexOrValue;
  }

  put = (i, value) => {
    this.dirty = true;
    this.array[i] = value;
  };

  swap = (i, j) => {
    this.dirty = true;
    const value = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = value;
  };
}
