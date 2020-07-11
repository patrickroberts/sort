<script context="module">
  import search from '../../search';

  const value = search('m', 'bubble', { stringify: s => s, parse: s => s });
  const { subscribe } = value;

  export const method = { subscribe };
</script>

<label>
  <span>Method</span>
  <select bind:value={$value}>
    <optgroup label="Comparative Methods">
      <option value="bubble">Bubble</option>
      <option value="cocktail">Cocktail</option>
      <option value="heap">Heap</option>
      <option value="insertion">Insertion</option>
      <option value="imerge">Merge (Iterative)</option>
      <option value="rmerge">Merge (Recursive)</option>
      <option value="quick">Quick</option>
      <option value="selection">Selection</option>
      <option value="shell">Shell</option>
      <option value="smooth">Smooth</option>
    </optgroup>
  </select>
</label>
