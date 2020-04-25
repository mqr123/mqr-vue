/**hash路由，不是history
 * vue-router的实现原理（渲染函数,slot插槽）
 * 1.实现插件: 可以install就行
 * 2.url变化监听
 * 3.路由配置解析：{'/':Home}
 * 4.实现组件：router-link router-view
 * 5.数据响应，动态更新视图
 */
import Vue from 'vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

class VueRouter{
    //构造函数接收传入的构造参数
    constructor(options){
        this.$options = options;
        this.routeMap = {};
        // 关键：当前路由的响应式，利用vue自身的响应机制，强绑定强依赖
        this.app = new Vue({
            data:{
                current:'/'
            }
        })
    }
    init(){
        this.bindEvents();
        this.createRouteMap(this.$options);
        this.initComponent();
    }
    // step2.url变化监听
    bindEvents(){
        // bind(this)重新绑定this指向
        window.addEventListener('load',this.onHashChange.bind(this));
        window.addEventListener('hashchange',this.onHashChange.bind(this));
    }
    onHashChange(){
        // 当路径变化时给this.app.current重新赋值，vue会自动响应，会调用initComponent重新渲染路由组件页面
        //默认加载'/'也就是首页
        this.app.current = window.location.hash.slice(1) || '/'
    }
    // step3.解析路由配置
    createRouteMap(options){
        options.routes.forEach(item=>{
            this.routeMap[item.path] = item.component;
        })
    }
    // step4.实现全局组件：router-link router-view
    initComponent(){
        //利用vue的component
        // router-link（生成a标签）
        Vue.component('router-link',{
            props:{to:String},
            render(h){
                // h(tag,data,children) 这里的this.$slot.default也就是a标签的文字内容
                return h('a',{attrs:{href:'#'+this.to}},[this.$slots.default]);
            }
        });
        // router-view（直接渲染组件）
        Vue.component('router-view',{
            // 用箭头函数的原因：保留this的指向，指向当前的router的实例
            render: (h)=>{
                console.log(this.routeMap[this.app.current]);
                const comp = this.routeMap[this.app.current];
                return h(comp);
            }
        });
    }

}
/**
 * step1.实现插件（执行install就好啦）
 * Vue在执行use方法时，会将自己传入，所以我们可以操作vue
 */
VueRouter.install = function(Vue){
    //混入，常见于vue组件扩展,监听beforeCreate钩子函数,会在组件创建的这个生命周期一块混入执行
    Vue.mixin({
        beforeCreate(){
            // this是当前组件的实例
            if(this.$options.router){
                // 仅在根组件执行一次，所以在每个组件中都可以使用$rouer
                Vue.prototype.$router = this.$options.router;
                this.$options.router.init();
            }
        }
    })
}


Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {path : '/',component : Home},
        {path : '/about',component : About},
    ]
})
