module.exports = {
  chainWebpack: config => {
    config.externals({
      'ros3d': 'ros3d',
      'roslib': 'roslib',
      'three': 'three',
      'vue-ros3djs': 'vue-ros3djs',
    })
  }
};