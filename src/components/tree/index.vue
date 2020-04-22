<template>
    <m-tree class="item" :model='treeData'></m-tree>
</template>

<script>
import MTree from './Tree';
export default {
    components:{
        MTree,
    },
    data(){
        return{
            treeData:[
                {
                    title:'计算属性和侦听器',
                    children:[
                        {
                            title:'计算属性',
                            children:[
                                {title:'基础例子'},
                                {title:'计算属性缓存 VS 方法'},
                                {title:'计算属性 VS 侦听属性'},
                                {title:'计算属性的setter'},
                            ]
                        },
                        {title:'侦听器'}
                    ]
                },
                {
                    title:'Class与Style绑定',
                    children:[
                        {
                            title:'绑定Html Class',
                            children:[
                                {title:'对象语法'},
                                {title:'数组语法'}
                            ]
                        },
                        {
                            title:'绑定内联样式',
                            children:[
                                {title:'对象语法'},
                                {title:'数组语法'}
                            ]
                        }
                    ]
                },
                {
                    title:'VUE的API'
                }
            ]
        }
    },
    methods:{}
}
</script>

<style scoped>

</style>


