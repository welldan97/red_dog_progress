export function index() {
  return new Promise(resolve => {
    const category = { id: 1, name: 'Meditation', type: 'counter', icon: '🌀' };
    setTimeout(() => resolve([category]), 1200);
  });
}
