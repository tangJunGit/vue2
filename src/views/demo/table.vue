<template>
  <div class="t-table-wrap">
    <!-- title -->
    <pageBreadcrumb title="样式模板" :items="['样式模板','表格页面']"></pageBreadcrumb>

    <!-- card -->
    <el-card class="box-card">
      <!-- filter -->
      <el-form :inline="true" :model="conditionForm" class="t-conditionForm">
        <el-form-item>
          <el-input v-model="conditionForm.keyword" size="small" placeholder="输入关键字">
            <el-button slot="append">查询</el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="姓名：">
          <el-select v-model="conditionForm.name" size="small" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <!-- table -->
      <el-table :data="tableData" border size="small" class="t-table">
        <el-table-column prop="date" label="日期" header-align="center" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" header-align="center" align="center"></el-table-column>
        <el-table-column prop="address" label="地址" header-align="center" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" header-align="center" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- pagination -->
      <el-pagination
        class="t-pagination"
        small
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        :total="200"
        layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
    </el-card>
  </div>
</template>
<script>
import pageBreadcrumb from "../common/pageBreadcrumb";
export default {
  data () {
    return {
      conditionForm: {},
      currentPage: 1,
      pageSize: 10,
      options: [{
        value: '1',
        label: '张三'
      }, {
        value: '2',
        label: '李四'
      }],
      tableData: [{
        date: '2018-08-08',
        name: '张三',
        address: '北京'
      }, {
        date: '2018-05-02',
        name: '李四',
        address: '北京'
      }, {
        date: '2018-05-04',
        name: '张三',
        address: '成都'
      }, {
        date: '2018-05-01',
        name: '李四',
        address: '上海'
      }, {
        date: '2018-05-08',
        name: '张三',
        address: '成都'
      }, {
        date: '2018-05-06',
        name: '李四',
        address: '上海'
      }, {
        date: '2018-05-07',
        name: '张三',
        address: '北京'
      }]
    }
  },
  methods: {
    /**
     * 改变每页多少条
     */
    handleSizeChange (val) {
      this.pageSize = val;
    },
    /**
     * 当前页数
     */
    handleCurrentChange (val) {
      this.currentPage = val;
    }
  },
  components: {
    pageBreadcrumb
  }
}
</script>
