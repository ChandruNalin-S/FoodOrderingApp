module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react',{runtime:"automatic"}]// if we not include runtime: automatic,then it through a error.
],
};