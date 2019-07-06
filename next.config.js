require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');

const path = require('path');
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  target: 'serverless',
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    return config;
  }
};

module.exports = withPlugins([withSass], nextConfig);
