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
    }
}
</script>

<style scoped>

</style>


