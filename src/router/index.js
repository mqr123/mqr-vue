import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history', //路由模式：hash(形式:#) | history(形式:/,服务器端需要设置，否则单页面刷新404) | abstract
  // base: prpcess.env.BASE_URL, //上下文地址，通过webpack配置进来
  routes: [
    {
      path: '/',
      name: 'Home', //name是命令式导航可以进行重定向
      component: Home,
      children:[{
        path:'/menu',
        name:'menu',
        component: Menu,
      }]
    },
    {
      path: '/about',
      name: 'About',
      //单独打包，分包加载
      //路由层级代码分割，生成分片(about.[hash].js)
      //当路由访问时进行懒加载
      //注释是给webpack看的，不写会自动随机生成
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})
