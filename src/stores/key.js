import { derived } from 'svelte/store';
import { all } from '../components/settings/All.svelte';

export default function createKey(iterator) {
  return derived([all, iterator], ([$all, $iterator]) => $all ? 'all' : $iterator.key);
}
