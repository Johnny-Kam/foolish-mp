<template>
  <div>
    <i-button type="default" @click="testFly">测试请求框架</i-button>
    <i-button type="error" @click="testMessage">测试Message提示</i-button>
    <i-button type="ghost" @click="goMinePage">测试router</i-button>
    <i-button type="info">测试</i-button>
    <i-button type="success">测试</i-button>
    <i-button type="warning">测试</i-button>
    <i-button type="primary">测试</i-button>
    <i-message id="message"></i-message>
  </div>
</template>

<script>
  // 引入iView全局消息组件
  const {$Message} = require('../../../static/iview/base/index');
  // 引入api
  import apiService from '../../api/apiService';
  export default {
    data() {
      return {}
    },
    methods: {
      /**
       * 测试请求框架
       */
      testFly() {
        apiService.testAPI().then(res=>{
          console.log(res)
        })
      },
      /**
       * 测试Message提示
       */
      testMessage() {
        $Message({
          content: '网络错误,请稍后重试!',
          type: 'error'
        });
      },
      /**
       * 跳转到我的页面
       * @param event
       */
      goMinePage() {
        this.$router.push({path: '/pages/mine/main', query: {a: 1111, b: 2222}})
      }
    }
  }
</script>

<style scoped>
</style>
