<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    //传值方式：祖——>后
    provide(){
        return{
            form: this //将自身传出，方便后代调用,在此组件中是为了将model和rules传给FromItem调用和校验
        }
    },
    props:{
        model:{
            type: Object,
            required:true //该属性为必传值
        },
        rules:{
            type: Object
        },
    },
    methods:{
        validate(callback){
            // 获取到FormItem的校验结果
            const tasks = this.$children
                .filter(item=>item.prop) //获取到又prop属性的FormItem数组，目的是为了过滤button等元素
                .map(item=>item.validate()) //执行FormItem的校验方法，返回的是一个Promise数组
            //所有校验任务都通过才算成功
            //注：因为在实际使用中validate传入的是一个回调函数，返回的是一个布尔值，所以在validate校验结果最后会返回一个布尔值
            Promise.all(tasks).then(()=>{
                callback(true)
            }).catch(()=>{
                callback(false)
            })
        }
    }
}
</script>

<style scoped>

</style>


