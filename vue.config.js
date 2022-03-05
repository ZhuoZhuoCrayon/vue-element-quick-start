// vue.config.js
module.exports = {
  // options...
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://crayon-cloud.com:30080/',
                ws: false,
                changeOrigin: true
            }
        }
    }
}
