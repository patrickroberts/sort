import { get } from 'svelte/store';

export default function cycle(node, all) {
  const toggle = () => {
    switch (get(all)) {
      case false:
        all.set(true);
        break;
      case true:
        all.set(null);
        break;
      case null:
        all.set(false);
        break;
    }
  };

  node.addEventListener('click', toggle);

  const unsubscribe = all.subscribe($all => {
    switch ($all) {
      case false:
        node.checked = false;
        node.indeterminate = false;
        break;
      case true:
        node.checked = true;
        node.indeterminate = false;
        break;
      case null:
        node.checked = false;
        node.indeterminate = true;
        break;
    }
  });

  return {
    destroy() {
      node.removeEventListener('click', toggle);
      unsubscribe();
    }
  };
}
