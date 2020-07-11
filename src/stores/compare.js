import { derived } from 'svelte/store';
import get from './get';
import sign from './sign';

export default derived([get, sign], ([$get, $sign], set) => {
  set((a, b) => ($get(a) - $get(b)) * $sign);
});
