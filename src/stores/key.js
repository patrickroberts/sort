import { derived } from 'svelte/store';
import { show } from '../components/settings/Show.svelte';

export default function createKey(iterator) {
  return derived([show, iterator], ([$show, $iterator]) =>
    $show === 1 ? 'all' :
    $show === 0 ? $iterator.key :
    `${$iterator.key}-all`
  );
}
