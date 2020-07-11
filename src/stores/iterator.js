import { derived, get } from 'svelte/store';
import createArray from './array';
import createContext from './context';
import unsorted from './unsorted';

export default function createIterator() {
  const array = createArray();
  const context = createContext(array);

  return derived(context, ($context, set) => {
    function commit(value) {
      $context.dirty = false;
      array.set(value);
    }

    const iterator = {
      value: $context.array,
      key: $context.criteria,
      next() {
        if ($context.done()) {
          commit($context.array);
        } else {
          set(iterator);
        }
      },
      reset() {
        commit(get(unsorted));
      }
    };

    set(iterator);
  });
}
