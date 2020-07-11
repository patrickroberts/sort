<script>
  export let items;
  export let key;
</script>

<main>
  {#each items as item}
    <div style={item.style(key)} />
  {/each}
</main>

<style>
  main {
    display: flex;
    height: 100%;
    transform: rotateX(180deg);
    transform-origin: center;
    transform-style: preserve-3d;
  }
  div {
    position: relative;
    flex-grow: 1;
  }
</style>
