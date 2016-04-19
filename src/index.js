const defaultMessage = 'Are you sure?';

function preventUnload(message = defaultMessage) {
  let handler = makeHandler(message);

  window.addEventListener('beforeunload', handler);
  return handler;
}

function cancel(handler) {
  if (!handler) {
    return;
  }

  window.removeEventListener('beforeunload', handler);
}

function makeHandler(message) {
  return () => {
    // cross-browser solution
    // https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
    event.returnValue = message;
    return message;
  };
}

export {
  preventUnload as default,
  cancel
};
