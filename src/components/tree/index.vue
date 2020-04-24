<template>
    <ul>
        <m-tree class="item" :model='treeData'></m-tree>
    </ul>
</template>

<script>
import MTree from './Tree';
export default {
    components:{
        MTree,
    },
    data(){
        return{
            treeData:{
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
            }
        }
    },
    methods:{}
}
</script>

<style scoped>

</style>


