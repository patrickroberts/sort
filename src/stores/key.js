import { derived } from 'svelte/store';
import { all } from '../components/settings/All.svelte';

export default function createKey(iterator) {
  return derived([all, iterator], ([$all, $iterator]) =>
    $all ? 'all' :
    $all === false ? $iterator.key :
    `${$iterator.key}-all`
  );
}
