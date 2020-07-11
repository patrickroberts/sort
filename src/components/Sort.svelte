<script>
  import createIterator from '../stores/iterator';
  import createKey from '../stores/key';
  import List from './List.svelte';
  import Menu from './Menu.svelte';

  const iterator = createIterator();
  const key = createKey(iterator);
</script>

<List items={$iterator.value} key={$key} />
<Menu iterator={$iterator} />
