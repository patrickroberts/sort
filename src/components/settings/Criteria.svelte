<script context="module">
  import search from '../../search';

  const value = search('p', 'top', { stringify: s => s, parse: s => s });
  const { subscribe } = value;

  export const criteria = { subscribe };
</script>

<label>
  <span>By</span>
  <select bind:value={$value}>
    <optgroup label="Dimensions">
      <option value="top">Top</option>
      <option value="bottom">Bottom</option>
      <option value="height">Height</option>
      <option value="center">Center</option>
    </optgroup>
    <optgroup label="Color">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="hue">Hue</option>
      <option value="saturation">Saturation</option>
      <option value="lightness">Lightness</option>
      <option value="luminance">Luminance</option>
    </optgroup>
  </select>
</label>
