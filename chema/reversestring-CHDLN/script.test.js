import { describe, expect, it, vi } from 'vitest';

const loadModule = async () => import('./script.js');

describe('reverseString', () => {
  it('reverses a basic string', async () => {
    const { reverseString } = await loadModule();
    expect(reverseString('AI4Devs')).toBe('sveD4IA');
  });

  it('handles empty values', async () => {
    const { reverseString } = await loadModule();
    expect(reverseString('')).toBe('');
    expect(reverseString(null)).toBe('');
    expect(reverseString(undefined)).toBe('');
  });

  it('handles unicode graphemes reasonably (codepoints)', async () => {
    const { reverseString } = await loadModule();
    expect(reverseString('a🙂b')).toBe('b🙂a');
  });
});

describe('initReverseStringApp (DOM)', () => {
  const makeDom = () => {
    document.body.innerHTML = `
      <input id="text-input" />
      <button id="reverse-btn" type="button">Invertir</button>
      <output id="result"></output>
    `;
  };

  it('throws if required elements are missing', async () => {
    document.body.innerHTML = `<div></div>`;
    const { initReverseStringApp } = await loadModule();
    expect(() => initReverseStringApp(document)).toThrow('Missing required elements');
  });

  it('writes reversed text on button click', async () => {
    makeDom();
    const { initReverseStringApp } = await loadModule();
    const { input, button, result } = initReverseStringApp(document);
    expect(button.disabled).toBe(true);
    input.value = 'AI4Devs';
    input.dispatchEvent(new Event('input'));
    expect(button.disabled).toBe(false);
    button.click();
    expect(result.textContent).toBe('sveD4IA');
  });

  it('writes reversed text on Enter keydown', async () => {
    makeDom();
    const { initReverseStringApp } = await loadModule();
    const { input, button, result } = initReverseStringApp(document);
    input.value = 'abcd';
    input.dispatchEvent(new Event('input'));
    expect(button.disabled).toBe(false);
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    expect(result.textContent).toBe('dcba');
  });

  it('does not update on non-Enter keydown', async () => {
    makeDom();
    const { initReverseStringApp } = await loadModule();
    const { input, button, result } = initReverseStringApp(document);
    input.value = 'abcd';
    input.dispatchEvent(new Event('input'));
    expect(button.disabled).toBe(false);
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(result.textContent).toBe('');
  });

  it('keeps the button disabled for whitespace-only input', async () => {
    makeDom();
    const { initReverseStringApp } = await loadModule();
    const { input, button, result } = initReverseStringApp(document);
    input.value = '   ';
    input.dispatchEvent(new Event('input'));
    expect(button.disabled).toBe(true);
    button.click();
    expect(result.textContent).toBe('');
  });
});

describe('auto init on DOMContentLoaded', () => {
  it('initializes when the app elements exist', async () => {
    document.body.innerHTML = `
      <input id="text-input" />
      <button id="reverse-btn" type="button">Invertir</button>
      <output id="result"></output>
    `;

    vi.resetModules();
    await import('./script.js');

    const input = document.getElementById('text-input');
    const button = document.getElementById('reverse-btn');
    const result = document.getElementById('result');

    input.value = 'AI4Devs';
    input.dispatchEvent(new Event('input'));
    window.dispatchEvent(new Event('DOMContentLoaded'));
    button.click();
    expect(result.textContent).toBe('sveD4IA');
  });

  it('does nothing when the app elements are missing', async () => {
    document.body.innerHTML = `<div></div>`;
    vi.resetModules();
    await import('./script.js');
    expect(() => window.dispatchEvent(new Event('DOMContentLoaded'))).not.toThrow();
  });
});
