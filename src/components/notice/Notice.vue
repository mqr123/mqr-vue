<template>
    <div class="box" v-if='isShow'>
        <h3>{{title}}</h3>  
        <p class="box-content">{{message}}</p>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            default: ''
        },
        message:{
            type: String,
            default: ''
        },
        duration:{
            type: Number,
            default: 1000
        }
    },
    data(){
        return{
            isShow: false
        }
    },
    methods:{
        show(){
            this.isShow = true;
            setTimeout(this.hide,this.duration);
        },
        hide(){
            this.isShow = false;
            this.remove();
        },
    }
}
</script>

<style scoped>
.box{
    position: fixed;
    width: 30%;
    top: 30%;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    background: rgba(0, 0, 0, .7);
    pointer-events: none;
    color: #d1d1d1;
    border-radius: 10px;
}
.box-content{
    margin: 10px auto;
    font-size: 14px;
    padding: 8px 16px;
}
</style>


