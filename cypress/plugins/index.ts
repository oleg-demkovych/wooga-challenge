module.exports = (on, config) => {
  // the path is relative to cypress.json
  const webpackFilename = '../../webpack.config.js';

  // configuration
  config.env.webpackFilename = webpackFilename;
  config.env.coverage = false;

  require('@cypress/react/plugins/load-webpack')(on, config, { webpackFilename });

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config;
};
