import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'

Vue.use(VueRouter)

// 1.路由配置和注册(静态加载)
const router = new VueRouter({
  // base: prpcess.env.BASE_URL, //上下文地址，通过webpack配置进来
  mode:'history', //路由模式：hash(形式:#) | history(形式:/,服务器端需要设置，否则单页面刷新404) | abstract
  routes: [
    {
      path: '/',
      name: 'Home', //name是命令式导航可以进行重定向
      component: Home,
      children:[
        {path:'/menu',name:'menu',component: Menu}
      ]
    },
    {
      path: '/about',
      name: 'About',
      meta: {auth: true},//路由守卫，此页面权限需要认证
      //单独打包，分包加载
      //路由层级代码分割，生成分片(about.[hash].js)
      //当路由访问时进行懒加载
      //注释是给webpack看的，不写会自动随机生成
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})
// //1.路由配置和注册(动态加载)
// //异步获取路由,并动态添加
// api.getRouters().then(routes=>{
//   const routeConfig = routes.map(route=>mapComponent(route));
//   router.addRoutes(routeConfig);
// })
// //映射关系
// const compMap = {
//   'Home': ()=> import('./views/Home.vue')
// }
// //递归替换
// function mapComponent(route){
//   route.component = compMap[route.component];
//   if(route.children){
//     route.children = route.children.map(child=>mapComponent(child))
//   }
//   return route
// }


// //2.全局路由守卫
// router.beforeEach((to,from,next)=>{
//   //需要认证的页面如果未登录，先跳转到登录页
//   //在此假设我们登录的判断依据是window的一个全局变量isLogin
//   if(to.meta.auth && !window.isLogin){
//     // window.confirm('请登录')
//     if(!window.isLogin){
//       window.isLogin = true; //这里的操作是重定向跳转登录页
//       next();  //已登录成功，继续访问
//     }else{
//       next('/');  //拒绝登录，返回首页
//     }
//   }else{
//     next('/');  //已登录或不需要登录，继续访问
//   }
// })

// 3.面包屑路由的实现方式(路由地址的深度，方便层级导航切换)
//BreakMenu.vue
// watch:{
//   $route(){
//     // this.$route.matched获取到组件名[{name:'home'},{name:'about'}]
//     // 整理格式['home','about']
//     this.breakData = this.$route.matched.map(e=>e.name)
//   }
// }


export default router