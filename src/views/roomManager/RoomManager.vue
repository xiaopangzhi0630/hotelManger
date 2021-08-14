<template>
  <div class="app-layout">
    <!-- <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-button type="primary" @click="addUser">增加角色</el-button>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-button type="primary" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row> -->


    <el-button type="success" icon="el-icon-download" @click="handleExportExcle">导出Excle</el-button>

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
      :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400"
      background>
    </el-pagination>
  </div>
</template>

<script>
  // 导入角色用户api层
  import * as role_api from "../../api/role_api.js"; //将role_api中的方法全部导出给一个role_api对象

  import Blob from '../../utils/Blob'
  import Export2Excel from '../../utils/Export2Excel.js'

  export default {
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

      handleExportExcle() {
        console.log(121);
        this.excelData = this.roleList; //将你要导出的数组数据（historyList）赋值给excelDate
        this.export2Excel(); //调用export2Excel函数，填写表头（clomns里的type）和对应字段(historyList里的属性名)

      },

      export2Excel() {
        var that = this;
        require.ensure([], () => {
          const {
            export_json_to_excel
          } = require("../../utils/Export2Excel.js");
          //这里使用绝对路径( @表示src文件夹 )，使用@/+存放export2Excel的路径【也可以写成相对于你当前"xxx.vue"文件的相对路径，例如我的页面放在assets文件夹同级下的views文件夹下的“home.vue”里，那这里路径也可以写成"../assets/excel/Export2Excel"】
          const tHeader = ["日期", "姓名", "省份", "市区", "地址", "邮编"]; // 导出的excel表头名信息
          const filterVal = [
            "date",
            "name",
            "province",
            "city",
            "address",
            "zip",
          ]; // 导出的excel表头字段名，需要导出表格字段名
          const list = that.excelData;
          const data = that.formatJson(filterVal, list);

          export_json_to_excel(tHeader, data, "客房管理列表"); // 导出的表格名称，根据需要自己命名
        });
      },

      //格式转换，直接复制即可,不需要修改什么
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]));
      },

      async getRoleList() {
        // 获取列表数据
        this.isLoading = true;
        let res = await role_api.roleList();
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