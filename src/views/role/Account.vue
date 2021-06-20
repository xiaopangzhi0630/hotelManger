<template>
  <div class="app-layout">
 
    <el-table :data="roleList" border style="margin-top: 20px"  v-loading="isLoading">
      <el-table-column prop="date" label="日期" align="center"  width="150"> </el-table-column>
      <el-table-column prop="name" label="姓名"  align="center"> </el-table-column>
      <el-table-column prop="province" label="省份"  align="center">
      </el-table-column>
      <el-table-column prop="city" label="市区"  align="center"> </el-table-column>
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
  </div>
</template>

<script>
  // 导入角色用户api层
  import * as role_api from "../../api/role_api.js"; //将role_api中的方法全部导出给一个role_api对象

  export default {
    name: 'account',
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
      async getRoleList() {
        // 获取列表数据
        this.isLoading = true;
        let res = await role_api.roleList();
        console.log('res2222', res.data);
        if(res.status == 200) {
          this.roleList = res.data;
           this.isLoading = false;
        };
      },

      handleClick(row) {
        console.log(row);
      },
      purple() {},
    },
  };
</script>

<style lang="sass" scoped>
</style>>