// 引入FLy
var Fly = require("flyio/dist/npm/wx");

// 实例化Fly
var fly = new Fly();

// 配置Request全局拦截器
fly.interceptors.request.use((request) => {
  // 输出debug级别请求日志
  console.debug("Fly Request: ", request)
  return request;
})

// 配置Response全局拦截器
fly.interceptors.response.use(
  (response) => {
    console.debug("Fly Response: ", response)
    //只将请求结果的data字段返回
    return response.data
  },
  (err) => {
    //发生网络错误后会走到这里
    console.error("Fly Response Error: ", err)
    //return Promise.resolve("ssss")
  }
)

// 超时配置
fly.config.timeout = 5000;

// 请求域名
fly.config.baseURL = process.env.API_BASE_URL;

export default fly;
