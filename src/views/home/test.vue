<template>
  <el-carousel :interval="2000" indicator-position="none" id="el-carousel">
    <el-carousel-item v-for="item in 4" :key="item">
      <img :src=" 'http://192.168.1.123:81/image/home/banner' +item+'.png' ">
    </el-carousel-item>
  </el-carousel>
</template>


<script>
  export default {
    data () {
      return {
        bannerHeight: 700,
        screenWidth: 1920
      }
    },

    mounted () {
      this.setSize1()
      const that = this
      window.addEventListener('resize', function () {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        that.screenWidth = width
        that.setSize()
      }, false)
    },
    methods: {
      setSize1: function () {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        this.screenWidth = width
        // 图片                高 / 宽  700 / 1920
        this.bannerHeight = 700 / 1920 * this.screenWidth - 50
        document.getElementById('el-carousel').style.height = this.bannerHeight + 'px'
      },

      setSize: function () {
        this.bannerHeight = 700 / 1920 * this.screenWidth - 50
        document.getElementById('el-carousel').style.height = this.bannerHeight + 'px'
      }
    }

  }
</script>


<style>
  .el-carousel__container {
    height: 100% !important;
  }

  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
  }
</style>
