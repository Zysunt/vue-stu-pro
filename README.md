# vue-stu-pro
项目结合了vue，elementui，vuex，axios，vue-router实现的。
从0到1实现的一个小demo。
对布局进行了拆分，主要分为login和布局首页。
权限菜单角色都在布局首页里面添加，递归菜单处理，这里后端只需要返回角色的code，前端过滤数据进行处理。
登录，退出登录，获取角色信息之类的请求都放在了vuex里统一管理，为了处理菜单路由更方便
一些小的优化点，比如查询下拉框等写死的数据统一放在utils里面统一管理，组件引入太多的话，也放在一个js文件统一管理。
封装了分页，后续也会加入table高度自适应指令等
里面也有一些小功能如：
echarts，vue-countTo---数字滚动插件

项目运行
```js
npm i
npm run dev
npm run build
```
