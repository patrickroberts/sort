import { readable } from 'svelte/store';
import { length } from '../components/settings/Length.svelte';
import Node from '../Node';

function create(length) {
  return Array.from({ length }, () => new Node());
}

export default readable([], set => {
  let array = [];
  const unsubscribe = length.subscribe($length => {
    array = $length > array.length
    ? array.concat(create($length - array.length))
    : array.slice(0, $length);

    set(array);
  });

  return unsubscribe;
});
