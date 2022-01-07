<template>
  <div class="app-layout">

    <!-- <transition name="el-zoom-in-center">
      <div v-show="true" class="transition-box">.el-zoom-in-center</div>
    </transition> -->
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-button type="primary" @click="dialogFormVisible = true" size="small">增加角色</el-button>
          <!-- <el-button type="primary" @click="$router.push('/layout/account')" size="small">账号管理</el-button> -->
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-input placeholder="请输入内容" v-model.trim="name" @clear="handleClear" clearable class="input-with-select"
            size="small">
            <el-button type="primary" slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-table :data="roleList" border style="margin-top: 20px" v-loading="isLoading" size="small">
      <el-table-column prop="date" label="日期" align="center" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="province" label="省份" align="center">
      </el-table-column>
      <el-table-column prop="city" label="市区" align="center">
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" align="center">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="drawer = true">编辑</el-button>
          <el-button @click="handleDetail(scope.row)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="mt20">
      <el-col :span="24" class="clearfix">
        <el-pagination class="fr" @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
          :total="400" background>
        </el-pagination>
      </el-col>
    </el-row>

    <el-dialog title="新增角色" :visible.sync="dialogFormVisible " @close="dialogClosed" width="40%">
      <el-form :model="form" ref="form">
        <el-form-item label="编号" :label-width="formLabelWidth" prop="id">
          <el-input v-model="form.id" autocomplete="off" size="small" style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off" size="small" style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="form.address" autocomplete="off" size="small" style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="email" :label-width="formLabelWidth" prop="email">
          <el-input v-model="form.email" autocomplete="off" size="small" style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth" prop="roomTypeName">
          <el-input v-model="form.roomTypeName" autocomplete="off" size="small" style="width: 90%"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false" size="small">确 定</el-button>
      </div>
    </el-dialog>


    <el-drawer title="编辑" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <span>我来啦!</span>
      <span>我来啦!</span>
      <span>我来啦!</span>
      <span>编辑页面</span>
    </el-drawer>




  </div>
</template>

<script>
  // 导入角色用户api层
  import * as role_api from "../../api/role_api.js"; //将role_api中的方法全部导出给一个role_api对象

  export default {
    name: "role",
    data() {
      return {
        dialogFormVisible: false,
        isLoading: false,
        name: "",
        copyList: [],
        roleList: [],

        drawer: false,
        direction: 'rtl',

        form: {
          id: '',
          name: '',
          address: '',
          roomTypeName: '',
          email: '',
        },
        formLabelWidth: '120px'
      };
    },

    created() {
      this.getRoleList();
    },
    methods: {

      handleClose(done) {
        // this.$confirm('确认关闭？')
        //   .then(_ => {
        done();
        // })
        // .catch(_ => {});
      },

      handleClear() {
        this.roleList = this.copyList;
      },

      handleSearch() {
        this.copyList = this.roleList.filter(element => {
          return Object.assign({}, element);
        });

        this.roleList = this.roleList.filter(item => {
          return item.name === this.name;
        });
      },

      goBackLogin() {
        // this.$router.push('/layout/account')
        // console.log(this);
        // console.log(this.$router);
        // this.$router.push({
        //   name: "account",
        // });
      },
      async getRoleList() {
        // 获取列表数据
        this.isLoading = true;
        let res = await role_api.roleList();
        if (res.status == 200) {
          this.roleList = res.data;
          this.isLoading = false;
        }
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.getRoleList();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.getRoleList();
      },

      handleDetail(row) {
        console.log(row);
        this.dialogFormVisible = true;
        this.form = Object.assign({}, row);
      },

      dialogClosed() {
        this.resetForm('form')
        // this.form = {
        //   id: '',
        //   name: '',
        //   address: '',
        //   roomTypeName: '',
        //   email: '',
        // }
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      }

    },
  };
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>