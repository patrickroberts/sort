export default function progress(iterator) {
  let value;

  return () => {
    const result = iterator.next(value);
    value = result.value;
    return result.done;
  };
}
