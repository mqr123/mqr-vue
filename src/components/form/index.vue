<template>
    <div>
        <h3>表单组件实现</h3>

        <m-form ref='loginForm' :model='model' :rules='rules' >
            <m-form-item label='用户名' prop='userName'>
                <m-input v-model='model.userName' placeholder='请输入用户名'></m-input>
            </m-form-item>

            <m-form-item label='密码' prop='password'>
                <m-input type='password' v-model='model.password' placeholder='请输入密码'></m-input>
            </m-form-item>
            
            <m-form-item>
                <button @click="submitForm('loginForm')">提交</button>
            </m-form-item>
        </m-form>

    </div>
</template>

<script>
import MForm from "./Form";
import MFormItem from "./FormItem";
import MInput from "./Input";
import Notice from "@/components/notice/Notice";

export default {
  components: {
    MForm,
    MFormItem,
    MInput
  },
  data() {
    return {
      model: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    // 提交表单操作
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        // 创建弹窗实例
        const notice = this.$create(Notice, {
          title: "校验结果显示弹窗",
          message: valid ? "校验成功，可以执行登录" : "校验失败",
          duration: 2000
        });
        notice.show();
      });
    }
  }
};
</script>

<style scoped>
</style>


