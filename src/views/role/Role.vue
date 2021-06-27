<template>
  <div class="app-layout">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-button type="primary" @click="addUser">增加角色</el-button>
          <el-button type="primary" @click="goBackLogin">返回登录页</el-button>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-button type="primary" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-table :data="roleList" border style="margin-top: 20px" v-loading="isLoading">
      <el-table-column prop="date" label="日期" align="center" width="150"> </el-table-column>
      <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
      <el-table-column prop="province" label="省份" align="center">
      </el-table-column>
      <el-table-column prop="city" label="市区" align="center"> </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" align="center"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination class="fr" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
      layout="total, sizes, prev, pager, next, jumper" :total="400" background>
    </el-pagination>
  </div>
</template>

<script>
  // 导入角色用户api层
  import * as role_api from "../../api/role_api.js"; //将role_api中的方法全部导出给一个role_api对象

  export default {
    name: 'role',
    data() {
      return {
        isLoading: false,
        input3: "",
        roleList: [],
      };
    },

    created() {
      this.getRoleList()
    },
    methods: {

      goBackLogin() {
        this.$router.push('/login')
      },
      async getRoleList() {
        // 获取列表数据
        this.isLoading = true;
        let res = await role_api.roleList();
        console.log('res2222', res.data);
        if (res.status == 200) {
          this.roleList = res.data;
          this.isLoading = false;
        };
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.getRoleList()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.getRoleList()
      },

      handleClick(row) {
        console.log(row);
      },
      addUser() {},
    },
  };
</script>

<style lang="sass" scoped>
</style>>