<template>
  <div class="hello">
    <!-- 二级路由渲染 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'permissionHome',
  data () {
    return {
      msg: '我是入学审批'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
