<template>
    <div class="form-item">
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if='errMsg'>{{errMsg}}</p>
    </div>
</template>

<script>
import Schema from 'async-validator'
/*
    FormItem的任务：
        1.给Input预留插槽slot
        2.能够展示label和校验信息 (父组件From通过provide的方式将只传过来，子组件通过inject获取)
        3.能够进行校验(使用第三方库)
*/
export default {
    // 取值方式：inject
    inject:['form'],
    props:{
        label:{
            type:String,
            default:''
        },
        prop:{
            type:String
        }
    },
    data(){
        return{
            errMsg:''
        }
    },
    mounted(){
        // 监听子组件是否需要校验
        // 注意：这里的this.validate需要使用箭头函数调用，这样就没有返回值了，也就不会在校验失败的时候返回一个promise致使vue报错
        this.$on('validate',()=>{
            this.validate();
        })
    },
    methods:{
        /*
         校验，需要子组件的值和检验规则，这里实现方式有两种
         1.子组件Input传入
         2.父组件获取(推荐)
        */
        validate(){
            //动态获取数据：使用计算属性父[子]
            const value = this.form.model[this.prop];
            const rules = this.form.rules[this.prop];
            // 使用第三方库进行校验 npm i async-validator -S
            const desc = {[this.prop]:rules}; //需要校验的对象和规则
            const schema = new Schema(desc);
            //执行校验方法 返回的是校验结果的Promise，外部Form表单关心校验结果
            return schema.validate({[this.prop]:value},err=>{
                if(err){
                    this.errMsg = err[0].message;
                }else{
                    this.errMsg = '';
                }
            })
            
        }
    }
}
</script>

<style scoped>
.form-item{
    margin-bottom: 15px;
}
p{
    font-size: 12px;
    color: rgb(248, 66, 66);
    margin: 0;
}
</style>


