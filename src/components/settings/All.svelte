<script context="module">
  import search from '../../search';
  import cycle from '../../actions/cycle';

  const table = [false, true, null];
  const value = search('s', true, { parse: s => table[+s], stringify: b => table.indexOf(b) });
  const { subscribe } = value;

  export const all = { subscribe };
</script>

<label>
  <span>Show All</span>
  <input use:cycle={value} type="checkbox" />
</label>

<style>
  label {
    font-size: smaller;
  }
</style>
