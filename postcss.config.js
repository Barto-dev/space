const postcssPresetEnv = require('postcss-preset-env');

const presetEnvConfig = {
  stage: 3,
  features: {
    'nesting-rules': false,
  }
}

module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-custom-media'),
    postcssPresetEnv(presetEnvConfig),
  ]
}

