window.onerror = (message, source, lineno, colno, error) => {
  // TODO: write any custom logic or logs the error
  console.warn('window.onerror-handler:', {
    message, source, lineno, colno, error,
  });
};
