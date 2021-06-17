<template>
  <div class="app-layout clearfix">

    <el-row class="mb20">
      <el-col :span="5">
        <span>类型：</span>
        <el-select v-model="roomType" placeholder="请选择类型" size='small'>
          <el-option v-for="item in roomTypeList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="5">
        <span>状态：</span>
        <el-select v-model="roomState" placeholder="请选择类型" size='small'>
          <el-option v-for="item in roomStateList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>

      <el-button type="primary" size='small'>查询</el-button>
      <el-button type="warning" size='small'>重置</el-button>

    </el-row>

    <el-table :data="tableData" border style="width: 100%; " v-loading="isLoading">
      <el-table-column prop="roomId" label="客房号" width="100" align="center">
      </el-table-column>
      <el-table-column prop="roomTypeName" label="客房类型" align="center">
      </el-table-column>
      <el-table-column prop="roomTypePrice" label="客房价格" align="center">
      </el-table-column>
      <el-table-column prop="roomState" label="客房状态" align="center">
      </el-table-column>
    </el-table>

    <el-pagination class="fr" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10"
      layout="total, sizes, prev, pager, next, jumper" :total="tolal" background style="margin-top: 20px;">
    </el-pagination>
  </div>
</template>

<script>
  // import axios from 'axios'
  export default {
    data() {
      return {
        isLoading: false,
        tableData: [],
        tolal: 0,
        currentPage: 1,
        roomType: '',
        roomTypeList: [{
            label: '标准间',
            value: 0
          },
          {
            label: '大床房',
            value: 1
          },
          {
            label: '豪华间',
            value: 3
          },
        ],
        roomState: '',
        roomStateList: [{
            label: '空闲',
            value: 0
          },
          {
            label: '入住',
            value: 1
          },
          {
            label: '维修',
            value: 3
          }
        ]

      }
    },

    created() {
      this.getRoomList();
    },
    methods: {
      async getRoomList() {
        console.log(this);
        this.isLoading = true;
        let res = await this.$get('/api/roomlist');
        console.log(res)
        if (res.status == 200) {
          this.tableData = res.data;
          this.tolal = res.total;
          this.isLoading = false;
        }
      },

      handleSizeChange(val) {
        this.getRoomList();
      },

      handleCurrentChange(val) {
        this.getRoomList();
      }
    }

  }
</script>

<style>

</style>