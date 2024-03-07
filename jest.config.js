export default {
    rootDir: 'src',
    verbose: true,
    moduleFileExtensions: ['js'],
    testRegex: '.\\.test\\.js$',
    testEnvironment: 'node',
    transform: {}, // Disable code transforms for ESM
    collectCoverageFrom: [
        '**/*.js',
        '!**/app.js',
        '!**/*.entity.js',
        '!**/data.js',
    ],
    coverageDirectory: '../coverage',
    coverageThreshold: {
        global:{
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    }
  };