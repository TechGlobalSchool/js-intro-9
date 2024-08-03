// Wrap your whole module in IIFE

const MATHModule = (function () {
  // All your calculations goes here
  function add(a, b) {
    return a + b;
  }

  return {
    add,
  };
})();
