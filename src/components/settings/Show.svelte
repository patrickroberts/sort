<script context="module">
  import search from '../../search';
  import select from '../../actions/select';
  import some from '../../actions/some';
  import only from '../../actions/only';

  const value = search('s', 0, { parse: Number, stringify: String });
  const { subscribe } = value;

  export const show = { subscribe };
</script>

<script>
  export let key;
</script>

<label>
  <span>Show</span>
  <select use:select={value}>
    <option value=1>Size and Color</option>
    <option value=2 use:some={key} />
    <option value=0 use:only={key} />
  </select>
</label>
