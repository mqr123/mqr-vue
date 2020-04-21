// 改vue实例是独立存在的，当前运行的项目无耦合


import Vue from 'vue'
export default function (Component,props) {
    /*
        1.创建一个vue实例
            a: render方法是为了生成一个VNode(虚拟DOM)
            b: 与之对应的是一个真实DOM，获取方式为vm.$el
            c: 入参为createElement,简写为h
    */ 
    const vm = new Vue({
        render(h){
            return h(Component,{props})
        }
    }).$mount()

    // 2.手动挂载
    document.body.appendChild(vm.$el)

    // 3.销毁方法，避免内存泄漏
    const comp = vm.$children[0]; //获取创建的组件，这里只有一个元素，获取[0]就行
    comp.remove = function(){     //给这个dom绑定一个销毁的属性方法
        document.body.removeChild(vm.$el);  //删除真实DOM
        vm.$destroy();                        //销毁虚拟DOM
    }
}