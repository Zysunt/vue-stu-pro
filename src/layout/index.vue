<template>
  <div >
   <el-container>
     <!-- 左侧导航 -->
      <NavMenu />
    <!-- 右侧主体 -->
    <el-container>
      <!-- 上部分 -->
      <el-header>
        <Top />
      </el-header>
      <!-- 主体部分 -->
      <el-main>
        <Main />
    </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
// 将页面布局拆分的组件统一存放，减少这里的代码。引入使用 export {default as Main} from './Main'
import {NavMenu,Top,Main} from './components'
export default {
  components:{
    NavMenu,
    Top,
    Main
  }
}
</script>

