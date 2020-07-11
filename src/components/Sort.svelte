<script>
  import createIterator from '../stores/iterator';
  import createKey from '../stores/key';
  import List from './List.svelte';
  import Settings from './Settings.svelte';

  const iterator = createIterator();
  const key = createKey(iterator);
</script>

<List items={$iterator.value} key={$key} />
<Settings iterator={$iterator} />
