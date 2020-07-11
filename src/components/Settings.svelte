<script>
  import Method from './settings/Method.svelte';
  import Length from './settings/Length.svelte';
  import Order from './settings/Order.svelte';
  import Criteria from './settings/Criteria.svelte';
  import Show from './settings/Show.svelte';
  import Menu from './Menu.svelte';

  export let iterator;
</script>

<div class="fixed">
  <Method />
  <Length />
  <Order />
  <Criteria />
  <Show key={iterator.key} />
  <Menu {iterator} />
</div>

<style>
  .fixed {
    top: 1rem;
    right: 1rem;
  }
  .fixed > :global(label) {
    display: block;
    float: left;
    clear: both;
    margin-bottom: 0.5rem;
  }
  .fixed :global(input),
  .fixed :global(select) {
    margin-bottom: 0;
  }
  .fixed > :global(label > span) {
    display: inline-block;
    width: 60px;
    text-align: right;
  }
</style>
