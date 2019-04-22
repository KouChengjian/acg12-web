<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<el-button @click="visible = true">按钮</el-button>-->

    <!--<el-dialog :visible.sync="visible" title="Hello world">-->
      <!--<p>欢迎使用 Element</p>-->
    <!--</el-dialog>-->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到菜鸟教程！'
    }
  }
}
</script>

<style >

</style>
