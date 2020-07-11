import progress from './progress';

export default class Context {
  dirty = false;
  #get;
  #compare;

  constructor(array, get, compare, method, criteria) {
    this.array = array;
    this.#get = get;
    this.#compare = compare;
    this.done = progress(method(this));
    this.criteria = criteria;
  }

  #toValue = (indexOrValue) => {
    return typeof indexOrValue === 'number'
    ? this.array[indexOrValue]
    : indexOrValue;
  };

  get = value => {
    this.dirty = true;
    return this.#get(this.#toValue(value));
  };

  compare = (a, b) => {
    this.dirty = true;
    return this.#compare(this.#toValue(a), this.#toValue(b));
  };

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
