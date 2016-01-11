const defaultMessage = 'Are you sure?';

let listener = null;

function preventUnload(message = defaultMessage) {
  listener = (event) => {
    // for cross-browser solution, see: https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
    event.returnValue = message;
    return message;
  };

  window.addEventListener('beforeunload', listener);
}

function revoke() {
  if (listener) {
    window.removeEventListener('beforeunload', listener);
    listener = null;
  }
}

export {
  preventUnload as default,
  revoke
};
