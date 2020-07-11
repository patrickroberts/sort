<script context="module">
  import search from '../../search';

  const value = search('n', 64);
  const { subscribe } = value;

  export const length = { subscribe };
</script>

<label>
  <span>Length</span>
  <input bind:value={$value} type="number" min=0 />
</label>
