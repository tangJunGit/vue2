<template>
    <div class="login-wrap">
        <div class="login-title">
            <h1>xxx 管理平台</h1>
        </div>
        <div class="login-section">
            <div class="header">登录</div>
            <el-form ref="form" :rules="rules" :model="form">
                <el-form-item prop="accout">
                    <el-input v-model="form.accout" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" class="login-btn" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form: {},
            isCommit: false,
            rules: {
                accout: [{ required: true, message: '请输入账号', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            }
        }
    },
    methods: {
        // 登录
        login(){
            this.$refs['form'].validate((valid) => {
                this.isCommit = true;
                if (!valid) return;
                this.isCommit = false;
            });
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../assets/less/login.less');
</style>
