<script context="module">
  import search from '../../search';

  const value = search('o', 'asc', { stringify: s => s, parse: s => s });
  const { subscribe } = value;

  export const order = { subscribe };
</script>

<label>
  <span>Order</span>
  <select bind:value={$value}>
    <option value="asc">Ascending</option>
    <option value="desc">Descending</option>
  </select>
</label>
