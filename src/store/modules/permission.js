import {constantRoutes,asyncRoutes} from '@/router'

function filterAsyncRouter(routes,name){  //过滤角色返回当前用户的路由菜单
  var data = routes.filter(route=>{
    return route.meta && route.meta.roles && name.some(v=>route.meta.roles.includes(v))
  })
  return data;
}

const state={
  routes:[]  //动态路由
};
const getters={
  get_routes:state=>state.routes,//把路由返回出去给页面布局的地方展示菜单
};
const actions={
  // 第二种处理 优化了下下，不过获取的地方可能需要改一改
  generateRoutes({ commit }, roles) {
    // 返回Promise 通过角色来过滤路由
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRouter(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  },
  // 第一种处理
  GENERATEROUTES({commit,state},rolesName){   //通过角色来过滤路由
    return new Promise((resolve, reject) => {
      let _routes; // 返回过滤后的路由
      let home = constantRoutes.filter(v=>v.path=='/home')[0];   // 拿到固定路由下的home下的第一个
      home.children = []; //每次都清除children
      if(rolesName.includes('administrator')){  //管理员
        home.children = asyncRoutes;// 直接赋值所有的异步路由
      }else {// 不是管理员
        let filterRouter = filterAsyncRouter(asyncRoutes,rolesName);// 过滤角色后再赋值给child
        home.children = filterRouter;
      };
      _routes = [home] || [];// 返回出去的路由赋值给过滤后的路由菜单数据
      commit('SET_ROUTES', _routes);// 提交给mutations去存在vuex里面
      resolve(_routes)// Promise成功后返回处理好的路由
    })
  },
};
const mutations={
  SET_ROUTES:(state,routes)=>{
    state.routes = routes;// 把action处理好的路由数据覆盖原来的数据存在vuex里面
  }
};

export default{
  state,
  getters,
  mutations,
  actions
}
