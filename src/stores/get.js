import { derived } from 'svelte/store';
import { criteria } from '../components/settings/Criteria.svelte';

export default derived(criteria, ($criteria, set) => {
  set(value => value[$criteria]);
});
