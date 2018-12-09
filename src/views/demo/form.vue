<template>
  <div class="t-table-wrap">
    <!-- title -->
    <pageBreadcrumb title="样式" :items="['样式','表单']"></pageBreadcrumb>

    <!-- form -->
    <el-card class="box-card">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名：" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年龄：" prop="age">
              <el-input v-model="form.age"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="地址：" prop="address">
              <el-select v-model="form.address" placeholder="请选择">
                <el-option label="北京" value="beijing"></el-option>
                <el-option label="上海" value="shanghai"></el-option>
                <el-option label="成都" value="chengdu"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="text-right">
              <el-button>取消</el-button>
              <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import pageBreadcrumb from "../common/pageBreadcrumb";
export default {
  data(){
    return {
      form: {},
      rules: {}
    }
  },
  components: {
    pageBreadcrumb
  }
}
</script>
