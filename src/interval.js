const handles = new WeakMap();

export function requestAnimationInterval(callback) {
  return frame({});

  function frame(handle) {
    handles.set(handle, requestAnimationFrame(time => {
      frame(handle);
      callback(time);
    }));

    return handle;
  }
}

export function cancelAnimationInterval(handle) {
  cancelAnimationFrame(handles.get(handle));
}
