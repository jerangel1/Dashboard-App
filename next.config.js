/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

const path = require('path');

// module.exports = {
//   webpack: (config, { isServer }) => {
//      // Fixes npm packages that depend on `fs` module
//      if (!isServer) {
//        config.node = {
//          fs: 'empty',
//        };
//      }
 
//      return config;
//   },
//  };