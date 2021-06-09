module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
