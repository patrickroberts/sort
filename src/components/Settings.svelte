<script>
  import Method from './settings/Method.svelte';
  import Length from './settings/Length.svelte';
  import Order from './settings/Order.svelte';
  import Criteria from './settings/Criteria.svelte';
  import All from './settings/All.svelte';
</script>

<div class="fixed">
  <div class="row">
    <Method />
  </div>
  <div class="row">
    <Length />
  </div>
  <div class="row">
    <Order />
  </div>
  <div class="row">
    <Criteria /> <All />
  </div>
</div>

<style>
  .fixed {
    top: 1rem;
    right: 1rem;
  }
  .row {
    margin-bottom: 0.5rem;
  }
  .row:last-child {
    margin-bottom: 0;
  }
  .row :global(input),
  .row :global(select) {
    margin-bottom: 0;
  }
  .row > :global(label:first-child > span) {
    display: inline-block;
    width: 60px;
    text-align: right;
  }
</style>
