module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // without this rule test part render() will get redling;
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
