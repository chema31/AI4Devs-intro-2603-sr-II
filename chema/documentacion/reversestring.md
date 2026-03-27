# Feature: Reverse string (vanilla)

## Historia de usuario

Como usuario, quiero una página web con lógica en JavaScript que invierta el orden de una cadena de texto que introduzca en un input de formulario, para ver el resultado invertido bajo el formulario cuando pulse un botón.

## Objetivo

Crear una página web en JavaScript (sin backend) que invierta una cadena.

- **Input**: `AI4Devs`
- **Output**: `sveD4IA`

## Especificación detallada (criterios de aceptación)

### UI/UX

- El documento debe tener el título **“Reverse string de Chema”**.
- Debe existir un **campo de texto** con `label` asociado.
- Debe existir un **botón** “Invertir”.
  - El botón debe estar **deshabilitado** cuando el input esté vacío.
  - El botón debe estar **deshabilitado** cuando el input contenga solo espacios (se considera vacío).
  - El botón debe **habilitarse** cuando el input tenga al menos un carácter no-espacio.
- Debe existir un **cuadro de resultado** bajo el formulario.
  - Debe mostrar el texto invertido tras pulsar el botón.
  - Recomendación: salida con `aria-live="polite"` para anunciar cambios.
- **Responsive** en navegadores modernos (Chrome/Firefox/Edge) y **Safari**.
- Estilo cuidado (foco visible, estados `disabled` claros, jerarquía visual limpia).

### Comportamiento

- Al pulsar el botón:
  - Se invierte el contenido actual del input y se muestra en el cuadro de resultado.
- Si el usuario vacía el input (o queda solo con espacios):
  - El botón se deshabilita.
  - El resultado puede mostrarse como cadena vacía (recomendado).

### Reglas de inversión

- La inversión se realiza por caracteres de forma razonable con Unicode (por _codepoints_).
- La entrada se trata como string:
  - `null`/`undefined` → `''`

### Calidad (“Done”)

- Deben existir **tests unitarios** de la lógica y del wiring de DOM.
- Deben pasar:
  - `npm test` (con **coverage mínimo 80%**)
  - `npm run lint`
  - `npm run format:check`

## Implementación

- **Función pura**: `reverseString(value)` en `chema/reversestring-CHDLN/script.js`
  - Usa `Array.from` para soportar correctamente caracteres Unicode por _codepoints_ (p.ej. emoji).
- **UI**: `index.html` con input, botón y un `output`.
- **Wiring**: `initReverseStringApp(root)` para testear la interacción DOM.

## Tests

En `chema/reversestring-CHDLN/script.test.js`:

- Tests unitarios de `reverseString`
- Tests de integración DOM con `jsdom` (click + Enter)

## Calidad

- **Coverage mínimo**: 80% (líneas/funciones/branches/statements) configurado en `chema/vitest.config.js`
- **Ejecución**:

```bash
cd chema
npm test
```
