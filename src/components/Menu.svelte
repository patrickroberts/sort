<script>
  import play from '../actions/play';

  export let iterator;
</script>

<div class="fixed">
  <button on:click={iterator.next}>Step</button>
  <button use:play={iterator}>Play</button>
  <button on:click={iterator.reset}>Reset</button>
</div>

<style>
  div {
    top: 1rem;
    left: 1rem;
  }
</style>
