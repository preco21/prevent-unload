const defaultMessage = 'Are you sure?';

let handler;

function preventUnload(message = defaultMessage) {
  if (handler) {
    return;
  }

  handler = makeHandler(message);
  window.addEventListener('beforeunload', handler);
}

function revoke() {
  if (!handler) {
    return;
  }

  window.removeEventListener('beforeunload', handler);
  handler = null;
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
