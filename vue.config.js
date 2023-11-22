const { defineConfig } = require('@vue/cli-service')

module.exports = {
  transpileDependencies: true,
  spa: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
    },
  },
};