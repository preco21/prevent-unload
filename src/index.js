export default function preventUnload(message) {
  const handler = createHandler(message);
  window.addEventListener('beforeunload', handler);

  return handler;
}

export function cancel(handler) {
  if (typeof handler !== 'function') {
    throw new Error('`handler` must be a function');
  }

  window.removeEventListener('beforeunload', handler);
}

function createHandler(message = '') {
  return (event) => {
    // Cross-browser solution
    // https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
    // eslint-disable-next-line no-param-reassign
    event.returnValue = message;

    return message;
  };
}
