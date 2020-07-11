export default function only(node, key) {
  const effect = {
    update(key) {
      node.textContent = `${toTitleCase(key)} Only`;
    }
  };

  effect.update(key);

  return effect;
}

function toTitleCase(s) {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
}
