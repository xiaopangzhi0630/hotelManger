<template>
  <div class="app-layout clearfix">
    <!-- <el-tooltip effect="dark" content="" placement="top">
      <el-button>111</el-button>
    </el-tooltip> -->

    <el-tooltip effect="dark" placement="top">
      <div slot="content">
        <span>112</span>
      </div>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A">

        </el-checkbox>



        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </el-tooltip>



    <v-popover offset="16">
      <!-- This will be the popover target (for the events and position) -->
      <button class="tooltip-target b3">Click me</button>

      <!-- This will be the content of the popover -->
      <template slot="popover">
        <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
        <p>
          {{ msg }}
        </p>

        <!-- You can put other components too -->
        <ExampleComponent char="=" />
      </template>
    </v-popover>

    <v-popover>
      <button>Click me</button>

      <template slot="popover">
        <a v-close-popover>Close</a>
      </template>
    </v-popover>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        checkList: ['选中且禁用', '复选框 A']
      }
    }

  }
</script>

<style>

</style>