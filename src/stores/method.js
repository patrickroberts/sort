import { derived } from 'svelte/store';
import { method } from '../components/settings/Method.svelte';
import * as methods from '../methods';

export default derived(method, ($method, set) => {
  set(methods[$method]);
});
