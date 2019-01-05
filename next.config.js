const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withSourceMaps(withSass(
    withCss({
      webpack: (config, options) => {
        return config;
      },
    })
  )
);
