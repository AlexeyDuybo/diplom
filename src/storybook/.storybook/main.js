module.exports = {
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: require('path').join(__dirname, '..', '..'),
    });

    config.entry.push(
      require('path').join(__dirname, '..', '..', 'client', 'index.scss')
    )

    config.resolve.extensions.push('.tsx')

    config.resolve.alias.style = require('path').join(__dirname, '..', '..', 'client', 'style')
    config.resolve.alias.utils = require('path').join(__dirname, '..', '..', 'client', 'utils')
    config.resolve.alias.library = require('path').join(__dirname, '..', '..', 'storybook', 'library'),
    config.resolve.alias.containers = require('path').join(__dirname, '..', '..', 'storybook', 'library')
    return config;
  },
  "stories": [
    "../library/**/*.stories.tsx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}