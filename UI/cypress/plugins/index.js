const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const webpack = require('@cypress/webpack-preprocessor');

module.exports = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', webpack({
    webpackOptions: {
      resolve: {
        extensions: ['.js', '.ts']
      },
      module: {
        rules: [
          {
            test: /\.feature$/,
            use: [
              {
                loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                options: config,
              },
            ],
          },
        ],
      },
    },
  }));
  return config;
};
