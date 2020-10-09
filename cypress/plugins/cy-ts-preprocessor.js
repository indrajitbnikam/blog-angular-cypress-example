const webpackPreprocessor = require("@cypress/webpack-preprocessor");

const webpackOptions = {
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }, {
            loader: 'angular2-template-loader'
          }
        ],
      },
      {
        test: /\.(scss)$/,
        loaders: ['to-string-loader', 'css-loader', 'sass-loader'],
        exclude: /\.async\.(scss)$/
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
        exclude: /\.async\.(css)$/
      },
      {
        test: /\.async\.(html|scss)$/,
        loaders: ['file?name=[name].[hash].[ext]', 'extract']
      }
    ]
  }
};

const options = {
  webpackOptions
};

module.exports = webpackPreprocessor(options);
