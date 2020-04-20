<template>
    <div>
        <input :value='value' @input='onInput' v-bind="$attrs">
    </div>
</template>

<script>
/*
    该组件需要实现的功能
    1.input双向绑定(自定义组件) 
        @input  value的指定
        v-model实际上是语法糖，只要input实现一件事，将来在外部使用的时候，就可以直接使用v-model绑定了
    2.派发校验事件
    3.v-bind="$attrs" 作用是继承父类的所有属性 
    4.语法糖作用：
        v-model='model.userName'
        等价于
        :value='model.userName' @input='model.userName=$event'

    官方文档：
    允许一个自定义组件在使用 v-model 时定制 prop 和 event。默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event，但是一些输入类型比如单选框和复选框按钮可能想使用 value prop 来达到不同的目的。使用 model 选项可以回避这些情况产生的冲突。
*/
export default {
    inheritAttrs: false, //默认行为，取消继承父类的属性
    //步骤一：传值方式：父——>子
    props:{
        value:{
            type: String, //传入值的类型
            default:''    //默认值设置
        }
    },
    methods:{
        // 步骤二：传值方式：子——>父
        onInput(e){
            this.$emit('input',e.target.value) //该操作是为了实现v-model
            this.$parent.$emit('validate')     //该操作是为了在值变动是告诉父组件该校验了
        }
    }
}
</script>

<style scoped>
    input{
        margin-bottom: 15px;
    }
</style>


