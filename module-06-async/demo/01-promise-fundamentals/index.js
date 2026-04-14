function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function fetchSighting(id) {
  return delay(50, { id, zone: 'Cretaceous Valley', status: 'nominal' }).then((data) => {
    if (!data.id) throw new Error('missing id');
    return data;
  });
}

console.log('\n--- Promise fundamentals ---');
fetchSighting('TRX-001')
  .then((d) => console.log('Ping:', d))
  .catch((e) => console.error('Failed', e));

await delay(80);
