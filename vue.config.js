module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/_variables.scss";`
      },
    }
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  productionSourceMap: false
}