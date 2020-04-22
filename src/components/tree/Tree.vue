<template>
    <!-- 这里在最外部使用li就表示，在外部调用该组件时就要用ul -->
    <!-- 该组件名为item，这里内部嵌套item组件，也就是实现了递归 -->
    <!-- 递归组件必须要有结束条件，这里的结束条件就是mode没有子级 -->
    <ul v-if='model'>
        <li v-for="(model,i) in model" :key='i' @click='toggle'>
            <span>{{model.title}}</span>
            <span v-if="hasChild">{{open?'-':'+'}}</span>
        </li>
        <m-tree v-show="open" v-if="hasChild" :model='model.children'></m-tree>
    </ul>



    <!-- <li>
        <div @click='toggle'>
            <span>{{model.title}}</span>
            <span v-if="hasChild">{{open?'-':'+'}}</span>
        </div>
        <ul v-show="open" v-if="hasChild">
            <m-tree class="item" v-for="model in model.children" :model='model' :key='model.title'></m-tree>
        </ul>
    </li> -->
</template>

<script>
export default {
    name:'MTree',
    props:{
        model:{
            type: Array,
            required:true,
        }
    },
    data(){
        return{
            open : false,//是否展开
        }
    },
    // 自定义的侦听器：数据变化时执行异步或开销较大的操作时使用
    // 计算属性：数据需要随着其它数据变动而变动时使用
    computed: {
        hasChild(){
            return this.model && this.model.length;
        }
    },
    methods:{
        toggle(){
            // 有子级就可以展开
            if(this.hasChild){
                this.open = !this.open;
            }
        }
    }
}
</script>

<style scoped>

</style>


