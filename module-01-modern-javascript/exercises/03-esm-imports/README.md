# Exercise — ESM imports

**Mission briefing:** The park's alert system needs to pull in code from three sources: a **Node built-in** module, an **npm package**, and a **local file**. Wire up the imports and implement two small functions.

## Tasks

Edit [`start.js`](start.js):

1. **Import `path`** from `node:path` (Node built-in).
2. **Import `pc`** from `picocolors` (npm package — already installed).
3. **Import `{ getRiskLabel }`** from `./risk-levels.js` (local module).
4. **Implement `formatAlert(dino)`**:
   - Apply `??` defaults: `name` → `'Unknown'`, `zone` → `'Uncharted'`, `dangerLevel` → `0`.
   - Get the risk label with `getRiskLabel(dangerLevel)`.
   - Colour the label with picocolors: `pc.red` if danger >= 4, `pc.yellow` if >= 2, otherwise `pc.green`.
   - Return format: `[COLOURED_LABEL] name @ zone`
5. **Implement `getExtension(filename)`**:
   - Use `path.extname(filename)` to return the file extension (e.g. `'.json'`).

## Verify

```bash
pnpm vitest run module-01-modern-javascript/exercises/03-esm-imports/start.test.js
```

Instructor reference: [`solution.js`](solution.js).
