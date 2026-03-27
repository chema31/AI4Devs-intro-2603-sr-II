# Calidad y criterios de “Done”

## Criterios de “Done” (por tarea/feature)

- **Tests unitarios**: deben existir y pasar.
- **Coverage**: mínimo **80%** (líneas/funciones/branches/statements).
- **Lint**: sin errores (`npm run lint`).
- **Formato**: consistente (`npm run format:check`).

## Tooling (en `chema/`)

- **Tests**: Vitest + jsdom + coverage v8.
- **Lint**: ESLint (flat config `eslint.config.js`).
- **Formato**: Prettier (`.prettierrc.json`).

## Comandos

```bash
cd chema
npm test
npm run lint
npm run format:check
```
