<template>
 <div class="app-layout">

    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-button type="primary" @click="purple">新增</el-button>
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
    <ul class="listSelectUi">
      <li class="listSelectLi">
        <ul>
          <li>日期</li>
          <li>姓名</li>
          <li>省份</li>
          <li>市区</li>
          <li>地址</li>
          <li>邮编</li>
          <li>操作</li>
        </ul>
      </li>
      <li v-for="(ele,index) in tableData" :key="index">
        <ul class="listSelect">
          <li>{{ele.date}}</li>
          <li>{{ele.name}}</li>
          <li>{{ele.province}}</li>
          <li>{{ele.city}}</li>
          <li>{{ele.address}}</li>
          <li>{{ele.zip}}</li>
          <li>
            <span @click="getTableDatac(index)">查看</span>
            <span @click="getTableDatac1(index)">编辑</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    methods: {
      getTableDatac(index){
        console.log(this.tableData[index])
      },
      getTableDatac1(index) {
        console.log(this.tableData[index])
      },
      handleClick(row) {
        console.log(row);
      },
      purple(){
      }
    },

    data() {
      return {
        input3: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }
        ],
      }
    }
  }
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.listSelectUi .listSelect {
  width: 100%;
}
li {
  list-style:none;
  display: inline-block;
  line-height: 57px;
}
.listSelect li {
  height: 57px;
  border-bottom: 1px solid #EBEEF5;
  padding-left: 10px;
}
.listSelectLi li {
  padding-left: 10px;
}
.listSelectLi {
  height: 57px;
  border-bottom: 1px solid #EBEEF5;
}
.listSelect li:nth-child(1),.listSelectLi li:nth-child(1){
  width: 137px;
}
.listSelect li:nth-child(2),.listSelectLi li:nth-child(2){
  width: 110px;
}
.listSelect li:nth-child(3),.listSelectLi li:nth-child(3){
  width: 110px;
}
.listSelect li:nth-child(4),.listSelectLi li:nth-child(4){
  width: 110px;
}
.listSelect li:nth-child(5),.listSelectLi li:nth-child(5){
  width: 290px;
}
.listSelect li:nth-child(6),.listSelectLi li:nth-child(6){
  width: 338px;
}
.listSelect li:nth-child(7),.listSelectLi li:nth-child(7){
  width: 90px;
}
.listSelect li:nth-child(7) {
  padding-left: 0;
  width: 100px;
}
.listSelectLi li:nth-child(7) {
  width: 100px;
  padding-left: 0;
}
.listSelect li:nth-child(7) span {
  font-size: 12px;
  color: #409EFF;
}
.listSelect li:nth-child(7) span:nth-child(1){
  margin-right: 10px;
}
</style>>