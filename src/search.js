import { writable } from 'svelte/store';

export default function search(key, value, converter = JSON) {
  const store = writable(read());

  store.subscribe(write);

  return store;

  function read() {
    const searchParams = new URLSearchParams(location.search);
    
    try {
      if (!searchParams.has(key)) {
        throw new ReferenceError(`Search parameter ${key} not found`);
      }

      return converter.parse(searchParams.get(key));
    } catch (error) {
      return value;
    }
  }

  function write(value) {
    const searchParams = new URLSearchParams(location.search);
    const text = converter.stringify(value);

    if (searchParams.get(key) === text) {
      return;
    }

    searchParams.set(key, text);
    searchParams.sort();
    history.replaceState(null, '', `?${searchParams}`);
  }
}
