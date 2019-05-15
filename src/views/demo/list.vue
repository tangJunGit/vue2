<template>
  <div>
    <!-- card -->
    <el-card class="box-card">
      <!-- filter -->
      <el-form :inline="true" :model="conditionForm" size="small">
        <el-form-item>
          <el-input v-model="conditionForm.keyword" placeholder="输入关键字">
            <el-button slot="append">查询</el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="地址：">
          <el-select v-model="conditionForm.address" placeholder="请选择">
            <el-option label="北京" value="beijing"></el-option>
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="成都" value="chengdu"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <!-- operate -->
      <div>
        <el-button type="primary" size="mini" @click="addEdit()">新增</el-button>
      </div>

      <!-- table -->
      <el-table :data="tableData" border stripe size="small" tooltip-effect="dark">
        <el-table-column prop="name" label="姓名" :show-overflow-tooltip="true" header-align="center" align="center"></el-table-column>
        <el-table-column prop="age" label="年龄" :show-overflow-tooltip="true" header-align="center" align="center"></el-table-column>
        <el-table-column prop="address" label="地址" :show-overflow-tooltip="true" header-align="center" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100" header-align="center" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="addEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- pagination -->
      <el-pagination
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

    <addEdit :dataForm="addEditForm" :visible.sync="addEditVisible" @save="addEditSave"></addEdit>
  </div>
</template>
<script>
import addEdit from "./add-edit";
export default {
  data () {
    return {
      conditionForm: {},
      tableData: [
        { id: 1, age: '16', name: '张三', address: '北京' }, 
        { id: 2, age: '18', name: '李四', address: '成都' }, 
        { id: 3, age: '19', name: '张三', address: '北京' }, 
        { id: 4, age: '14', name: '李四', address: '成都' }, 
        { id: 5, age: '16', name: '张三', address: '北京' }, 
        { id: 6, age: '19', name: '张三', address: '上海' }, 
        { id: 7, age: '15', name: '李四', address: '成都' }, 
      ],
      currentPage: 1,
      pageSize: 10,
      addEditForm: {},
      addEditVisible: false
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
    },
    /**
     * 新增编辑
     */
    addEdit (row) {
      this.addEditForm = row || {};
      this.addEditVisible = true;
    },
    addEditSave (form) {
      console.log(form)
      this.$message.success('保存成功');
    },
    /**
     * 删除
     */
    del (row) {
      this.$confirm(`此操作将删除[${row.name}]数据， 是否继续？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message.success('删除成功');
        }).catch(() => {
          this.$message.info('已取消删除');          
        });
    }
  },
  components: {
    addEdit
  }
}
</script>
