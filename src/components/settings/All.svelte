<script context="module">
  import search from '../../search';

  const value = search('s', true, { parse: s => Boolean(+s), stringify: b => String(+b) });
  const { subscribe } = value;

  export const all = { subscribe };
</script>

<label>
  <span>Show All</span>
  <input bind:checked={$value} type="checkbox" />
</label>

<style>
  label {
    font-size: smaller;
  }
</style>
