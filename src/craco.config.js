const CracoAlias = require("craco-alias");

module.exports = {
  webpack: {
    alias: {
      // Fallbacks for Node.js core modules
      buffer: require.resolve('buffer'),
      stream: require.resolve('stream'),
      util: require.resolve('util'),
      crypto: require.resolve('crypto-browserify'),

    }
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        // Add any additional aliases here if needed
      }
    }
  ]
};
