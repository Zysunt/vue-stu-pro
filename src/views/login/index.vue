<template>
  <div class="about">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="account">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      
       <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  data(){
    return {
      ruleForm:{
        account:'',
        password:''
      },
      rules:{
         account: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods:{
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
         if (valid) {
            this.$store.dispatch('loginLoan',this.ruleForm)
              .then(res=>{
                console.log(res);
                this.$router.push('/home');
              })
          }
        });
      },
  }
}
</script>
