<template>
  <div class="app-layout">


    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>


    <br />
    <br />

    <el-select v-model="mineStatus" placeholder="请选择" multiple collapse-tags @change="selectChange" style="width:500px">
      <el-option :value="mineStatusValue" style="height: auto">
        <!-- //option展开高度太小，把height设置为auto就好啦 -->
        <el-tree :data="data" show-checkbox node-key="id" ref="tree" highlight-current :props="defaultProps"
          @check-change="handleCheckChange"></el-tree>
      </el-option>
    </el-select>


    <br />
    <br />

    <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" row-key="id" border default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column prop="date" label="日期" sortable width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit( scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
            id: 31,
            date: '2016-05-022222131',
            name: '王小虎, zhangsan',
            address: '上海市普陀区金沙江路 1519 弄',
            children: [{
              id: 300,
              date: '211111',
              name: '55555, zhangsan',
              address: 'beijig弄',
            }]
          }, {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],

        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',


        mineStatus: "",
        mineStatusValue: [],
        data: [{
            id: 1,
            label: "一级 1",
            children: [{
              id: 4,
              label: "二级 1-1"
            }]
          },
          {
            id: 2,
            label: "一级 2",
            children: [{
                id: 5,
                label: "二级 2-1"
              },
              {
                id: 6,
                label: "二级 2-2"
              }
            ]
          },
          {
            id: 3,
            label: "一级 3",
            children: [{
                id: 7,
                label: "二级 3-1"
              },
              {
                id: 8,
                label: "二级 3-2"
              }
            ]
          }
        ],
        defaultProps: {
          children: "children",
          label: "label"
        }

      }
    },
    methods: {

      //select框值改变时候触发的事件
      selectChange(e) {
        console.log('e', e);
        var arrNew = [];
        var dataLength = this.mineStatusValue.length;
        var eleng = e.length;
        for (let i = 0; i < dataLength; i++) {
          for (let j = 0; j < eleng; j++) {
            if (e[j] === this.mineStatusValue[i].label) {
              arrNew.push(this.mineStatusValue[i])
            }
          }
        }
        this.$refs.tree.setCheckedNodes(arrNew); //设置勾选的值
      },

      handleCheckChange() {
        let res = this.$refs.tree.getCheckedNodes(false, false);
        //这里两个true，1. 是否只是叶子节点 2. 是否包含半选节点（就是使得选择的时候不包含父节点）
        let arrLabel = [];
        let arr = [];
        res.forEach(item => {
          arrLabel.push(item.label);
          arr.push(item);
        });
        this.mineStatusValue = arr;
        this.mineStatus = arrLabel;
        console.log('arr:' + JSON.stringify(arr))
        console.log('arrLabel:' + arrLabel)
      },



      handleEdit(row) {
        console.log(row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
      
      // load(tree, treeNode, resolve) {
      //   setTimeout(() => {
      //     resolve([{
      //       id: 31,
      //       date: '2016-05-01',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1519 弄'
      //     }, {
      //       id: 32,
      //       date: '2016-05-01',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1519 弄'
      //     }])
      //   }, 1000)
      // }
    },
  }
</script>

<style>

</style>