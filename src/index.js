const defaultMessage = 'Are you sure?';

let listener;

function preventUnload(message = defaultMessage) {
  if (listener) {
    return;
  }

  listener = makeHandler(message);
  window.addEventListener('beforeunload', listener);
}

function revoke() {
  if (!listener) {
    return;
  }

  window.removeEventListener('beforeunload', listener);
  listener = null;
}

function makeHandler(message) {
  return () => {
    // for cross-browser solution, see: https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
    event.returnValue = message;
    return message;
  };
}

export {
  preventUnload as default,
  revoke
};
