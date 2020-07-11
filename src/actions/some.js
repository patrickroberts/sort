export default function some(node, key) {
  const effect = {
    update(key) {
      switch (key) {
        case 'top':
        case 'bottom':
        case 'height':
        case 'center':
          node.textContent = `${toTitleCase(key)} and Color`;
          break;
        default:
          node.textContent = `Size and ${toTitleCase(key)}`;
          break;
      }
    }
  };

  effect.update(key);

  return effect;
}

function toTitleCase(s) {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
}
