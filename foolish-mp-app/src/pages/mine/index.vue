<template>
  <div>
    <i-button type="primary" @click="goIndexPage">返回首页</i-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    /**
     * 返回首页
     */
    goIndexPage() {
      console.log("调用$router了",this.$router)
      this.$router.push({path: '/pages/index/main'})
    }
  },
  mounted(){
    console.log("参数传递:",this.$route.query)
  }
}
</script>

<style scoped>
</style>
