<script>
  import play from '../actions/play';

  export let iterator;
</script>

<div>
  <button use:play={iterator}>Play</button>
  <button on:click={iterator.next}>Step</button>
  <button on:click={iterator.reset}>Reset</button>
</div>

<style>
  div {
    text-align: center;
    clear: both;
  }
</style>
