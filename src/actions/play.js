import { requestAnimationInterval, cancelAnimationInterval } from '../interval';

export default function play(node, initialIterator) {
  let iterator = initialIterator;
  let handle = null;

  const resume = () => {
    node.textContent = 'Pause';
    handle = requestAnimationInterval(iterator.next);
  };

  const pause = () => {
    node.textContent = 'Play';
    cancelAnimationInterval(handle);
    handle = null;
  };

  const toggle = () => {
    if (handle === null) {
      resume();
    } else {
      pause();
    }
  };

  node.addEventListener('click', toggle);

  return {
    update(nextIterator) {
      if (nextIterator === iterator) return;

      pause();
      iterator = nextIterator;
    },
    destroy() {
      pause();
      node.removeEventListener('click', toggle);
    }
  };
}
