class ConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ConfigError';
  }
}

function readPort() {
  const raw = process.env.API_PORT ?? '3000';
  const n = Number(raw);
  if (!Number.isInteger(n) || n <= 0) {
    throw new ConfigError('API_PORT must be a positive integer');
  }
  return n;
}

try {
  console.log('\n--- Error handling demo ---');
  console.log('Resolved port:', readPort());
} catch (e) {
  console.error('Structured failure:', e.name, e.message);
}
