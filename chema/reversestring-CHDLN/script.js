export function reverseString(value) {
  const str = String(value ?? '');
  return Array.from(str).reverse().join('');
}

export function initReverseStringApp(root = document) {
  const input = root.getElementById('text-input');
  const button = root.getElementById('reverse-btn');
  const result = root.getElementById('result');

  if (!input || !button || !result) {
    throw new Error('Missing required elements');
  }

  const hasMeaningfulText = () => input.value.trim().length > 0;

  const syncButtonState = () => {
    const enabled = hasMeaningfulText();
    button.disabled = !enabled;
    if (!enabled) result.textContent = '';
  };

  const render = () => {
    if (!hasMeaningfulText()) {
      syncButtonState();
      return;
    }
    result.textContent = reverseString(input.value);
  };

  button.addEventListener('click', render);
  input.addEventListener('input', syncButtonState);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') render();
  });

  syncButtonState();
  return { input, button, result, render };
}

if (typeof document !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const hasApp =
      document.getElementById('text-input') &&
      document.getElementById('reverse-btn') &&
      document.getElementById('result');
    if (hasApp) initReverseStringApp(document);
  });
}
