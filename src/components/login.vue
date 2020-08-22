<template>
  <div>
    <el-container>
      <el-header>
        <img src="../assets/logo.png" />
      </el-header>
      <el-main>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '李四',
        password: 'lisi1234'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (forName) {
      this.$refs[forName].validate((valid) => {
        if (valid){
          const _that = this
          //post(后端地址)
          this.$axios.post('http://localhost:8080/Demo/user/login',{'username': this.ruleForm.username, 'password': this.ruleForm.password},{
            headers: {'Content-Type': 'application/json;charset=UTF-8'}
          }).then(res => {
            console.log(res.data)
            if (res.data.code === 200) {
              //console.log(res.data.msg)
              this.$store.commit('setUsername', res.data.data.username)
              this.$router.push('/home')
            } else {
              console.log(res.data.msg + 'cccc')
            }
          })
        } else {
          console.log('error submit!')
          return false
        }
      })  
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
    // resetLoginForm () {
    //   this.$refs.loginFormRef.resetFields()
    // },
    // login () {
    //   //this.$refs.loginFormRef.validate(async valid => 
    //   this.$http.post('http://localhost:8080/Demo/user/login',this.$qs.stringify(this.ruleFrom),
    //   {headers:{'Content-Type': 'application/json;charset=UTF-8'}}).validate(async valid =>
    //   {
    //     if (!valid) return false
    //     const { data: res } = await this.$http.post('login', this.loginForm)
    //     if (res.meta.status !== 200) return this.$message.error('登录失败')
    //     this.$message.success('登录成功')
    //     // 加入token 确保安全
    //     //  window.sessionStorage.setItem('token', res.data.token)
    //     this.$router.push('/home')
    //   })
    // }
  }
}
</script>

<style scoped>
img {
  height: 80%;
}
.demo-ruleForm {
  width: 300px;
  margin: 0 auto;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
