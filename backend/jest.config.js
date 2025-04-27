// // jest.config.js
// module.exports = {
//     collectCoverage: true,
//     coverageReporters: ['lcov', 'text'],
//     coverageDirectory: './coverage',
//   };

// jest.config.js
module.exports = {
    collectCoverage: true,
    coverageReporters: ['lcov', 'text'],
    coverageDirectory: './coverage',
    testEnvironment: 'node',  // Use 'node' environment for backend tests
  };