var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //接口请求基础地址
  API_BASE_URL: '"http://localhost:3000"'
})
