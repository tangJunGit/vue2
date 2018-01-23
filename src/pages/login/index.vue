<template>
    <form class="login" v-on:submit.prevent="submit">
        <div class="line">	
            <div v-show="btn && !form.id">id不能为空</div>
            <input type="number" placeholder="输入你的id" v-model="form.id">
        </div>
        <div class="line">
            <div v-show="btn && !form.name">用户名不能为空</div>
            <input type="text" placeholder="输入你的用户名" v-model="form.name">
        </div>
        <button>登录</button>
    </form>
</template>
<script src="./login.js"></script>
<style lang="less" scoped>
@import url("./login.less");
</style>