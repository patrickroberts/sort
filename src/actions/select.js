export default function select(node, show) {
  const change = () => {
    show.set(+node.value);
  };

  node.addEventListener('change', change);

  const unsubscribe = show.subscribe($show => {
    node.value = $show;
  });

  return {
    destroy() {
      node.removeEventListener('change', change);
      unsubscribe();
    }
  };
}
