module.exports = {
  chainWebpack: config => {
    config.externals({
      '@tweenjs/tween.js': '@tweenjs/tween.js',
      'ros3d': 'ros3d',
      'roslib': 'roslib',
      'three': 'three',
      'vue': 'vue',
    })
  }
};
