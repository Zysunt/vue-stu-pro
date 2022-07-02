<template>
  <div class="header">
    <!-- 面包屑 渲染 title  separator="/" 间隔是/ -->
    <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item v-for="v in list" :key="v.path">{{v.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 退出登录等一些其他操作 -->
    <el-dropdown>
        <span class="el-dropdown-link">
        退出<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
            <span @click="goBack()">退出</span>
        </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    </div>
</template>

<script>

export default {
  data(){
    return {
      list:[]
    }
  },
  watch:{
    $route(to,from){
      // 面包屑菜单名字 实时监听watch 从路由当前的所有内容数据matched去过滤title
      this.list = to.matched.filter(item=>item.meta && item.meta.title);
    }
  },
  mounted(){
    // 组件挂载时 从路由地址 $route.matched 过滤菜单名字
    this.list = this.$route.matched.filter(item=>item.meta && item.meta.title);
  },
  methods:{
    goBack(){
      // 退出登录，跳转login页 请求和移除token等内容都写在vuex里面
      this.$store.dispatch('logoutLoan').then(res=>{
        this.$router.push('/login');
      })
    }
  }
}
</script>

<style lang="scss">
  .header {
    line-height: 60px;
    .breadcrumb {
      display:inline-block;
    }
    .el-dropdown {
      float: right;
    }
  }
</style>