console.log(`
Suggested feature-first layout (example):

  src/
    tracking/
      index.js          // public facade
      sensors.js        // internal helpers (not exported)
    reporting/
      index.js
      formatters.js
    shared/
      errors.js
      config.js
    cli.js              // composition root

Rules of thumb:
- Depend inward: features may use shared/, not each other's internals.
- Export narrow surfaces from each index.js.
- Keep side effects (I/O) at the edges; pure logic in the middle.
`);
