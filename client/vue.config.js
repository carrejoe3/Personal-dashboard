const path = require('path')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '': {
        target: 'http://localhost:8081'
      }
    }
  },
  outputDir: path.resolve(__dirname, '../server/public')
}
