import { writable } from 'svelte/store';
import unsorted from './unsorted';

export default function createArray() {
  return writable([], set => {
    const unsubscribe = unsorted.subscribe($unsorted => {
      set($unsorted);
    });

    return unsubscribe;
  });
}
