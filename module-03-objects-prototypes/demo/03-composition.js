/**
 * Demo: compose capabilities instead of subclassing four different flyers.
 */
const canRoar = (state) => ({
  roar() {
    return `${state.name} ROARS (${state.volume}dB)`;
  },
});

const canFly = (state) => ({
  fly() {
    return `${state.name} lifts off — wingspan ${state.wingspanM}m`;
  },
});

function createPterosaur(name) {
  const state = { name, wingspanM: 6, volume: 110 };
  return {
    ...state,
    ...canRoar(state),
    ...canFly(state),
  };
}

const skyler = createPterosaur('Skyler');
console.log('\n--- Composition demo ---');
console.log(skyler.roar());
console.log(skyler.fly());
