// setupTests.js
import '@testing-library/jest-dom'

// Mock matchMedia for responsive design tests
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () { },
      removeListener: function () { },
    }
  }

// Mock requestAnimationFrame for animation tests
// window.requestAnimationFrame = (callback) => {
//   setTimeout(callback, 0)
// }
