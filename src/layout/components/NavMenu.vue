<template>
      <el-aside width="200px" class="aside">
      <!-- 左侧导航 default-active默认展开当前的路由$route.path 精确匹配样式exact 路由方式router -->
      <el-menu :default-active="$route.path" exact router> 
        <!-- 递归动态展示里面的菜单 get_routes[0].children根据child存的不同而取值不同 -->
      <sideItem v-for="v in get_routes[0].children" :key="v.path" :item="v" :path="v.path"/>
      </el-menu>
    </el-aside>
    
</template>

<script>
import {mapGetters} from 'vuex'
import sideItem from './sideItem'
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters(['get_routes'])
  },
  components:{
    sideItem
  }
}
</script>



