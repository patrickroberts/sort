import { derived } from 'svelte/store';
import { order } from '../components/settings/Order.svelte';

export default derived(order, $order => $order === 'asc' ? 1 : -1);
