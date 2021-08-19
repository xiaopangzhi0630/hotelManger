<template>
  <div class="app-layout">

    <el-select v-model="value" disabled placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <br />
    <br />
    <br />

    <el-table :data="tableData" style="width: 100%" border row-key="id" :row-class-name="tableRowClassName">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
  import Sortable from 'sortablejs';


  export default {
    data() {
      return {

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
        tableData: [{
          id: '2',
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          id: '4',
          date: '2016-05-04',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '1',
          date: '2016-05-01',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          id: '3',
          date: '2016-05-03',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },

    mounted() {
      this.rowDrop();
    },

    methods: {
      // 样式
      tableRowClassName({
        row,
        rowIndex
      }) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },

      //行拖拽
      rowDrop() {
        const tbody = document.querySelector('.el-table__body-wrapper tbody')
        const _this = this
        Sortable.create(tbody, {
          onEnd({
            newIndex,
            oldIndex
          }) {
            const currRow = _this.tableData.splice(oldIndex, 1)[0]
            _this.tableData.splice(newIndex, 0, currRow)
          }
        })
      },
    }


  }
</script>

<style lang="scss" scoped>
  ::v-deep .el-table .warning-row {
    background: rgb(243, 218, 172);
  }

  ::v-deep .el-table .success-row {
    background: #f0f9eb;
  }
</style>