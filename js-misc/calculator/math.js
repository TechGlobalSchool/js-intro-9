// Wrap your whole module in IIFE

const MATHModule = (function () {
  function add(a, b) {
    return parseInt(a) + parseInt(b);
  }
  // Keep adding more functions

  return {
    add,
  };
})();
