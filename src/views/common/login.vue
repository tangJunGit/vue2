<template>
  <div class="wrap">
    <div class="login-title">
      <h1><span>校园</span> 管理平台</h1>
    </div>
    <div class="login-section">
      <el-form ref="form" :rules="rules" :model="form" @keyup.enter.native="login">
        <el-form-item prop="accout">
          <el-input v-model="form.accout" autofocus placeholder="请输入账号">
            <template slot="prepend"><i class="fa fa-user"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码">
            <template slot="prepend"><i class="fa fa-lock"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="auth">
          <el-input v-model="form.auth" placeholder="请输入验证码">
            <template slot="prepend"><i class="fa fa-random"></i></template>
            <template slot="append"><img class="qr-code" src="../../assets/images/auth_code.jpg" alt=""></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { MENU_LIST } from "../../store/mutations.js";
export default {
  data () {
    return {
      form: {},
      rules: {
        accout: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { pattern: /^[A-Za-z0-9_]+$/, message: '账号必须是数字、字母、下划线', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        auth: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 登录
    login () {
      this.$refs['form'].validate((valid) => {
        if (!valid) return

        this.$router.push({ name: 'demoList' })
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import url("../../assets/less/common/login.less");
</style>