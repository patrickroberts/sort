import { derived } from 'svelte/store';
import { criteria } from '../components/settings/Criteria.svelte';
import Context from '../Context';
import get from './get';
import compare from './compare';
import method from './method';

export default function createContext(array) {
  let context = new Context([], [], () => 0, () => 0, function* () {});

  return derived([array, get, compare, method, criteria], ([$array, $get, $compare, $method, $criteria], set) => {
    if (context.dirty) return;

    context = new Context($array.slice(), $get, $compare, $method, $criteria);
    set(context);
  });
}
