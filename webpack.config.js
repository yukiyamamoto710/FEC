const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              ["@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
};
