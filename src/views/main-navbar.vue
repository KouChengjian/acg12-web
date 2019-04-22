<template>
  <nav class="site-navbar" :class="'site-navbar--' + navbarLayoutType">

    <div class="site-navbar__header">
      <a class="site-navbar__logo">
        <img src="../assets/img/logo.png" style="width: 30px"/>
      </a>
      <el-menu class="site-navbar__menu site-navbar__menu--left" mode="horizontal">
        <el-menu-item index="1" @click="$router.push({ name: 'home' })" >
          <a  target="_blank">菜单一</a>
        </el-menu-item>

        <el-menu-item index="2" @click="$router.push({ name: 'home' })">
          <a  target="_blank">菜单二</a>
        </el-menu-item>

        <el-menu-item index="3" @click="$router.push({ name: 'theme' })">
          <a  target="_blank">菜单三</a>
        </el-menu-item>

        <el-submenu index="3">
          <template slot="title">Git源码</template>
          <el-menu-item index="2-1"><a href="//github.com/daxiongYang/renren-fast-vue" target="_blank">前端</a>
          </el-menu-item>
          <el-menu-item index="2-2"><a href="//git.oschina.net/renrenio/renren-fast" target="_blank">后台</a></el-menu-item>
          <el-menu-item index="2-3"><a href="//git.oschina.net/renrenio/renren-generator" target="_blank">代码生成器</a>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

    <div class="site-navbar__body clearfix">

    </div>
    <!--&lt;!&ndash; 弹窗, 修改密码 &ndash;&gt;-->
    <!--<update-password v-if="updatePassowrdVisible" ref="updatePassowrd"></update-password>-->
  </nav>
</template>

<script>
  export default {}
</script>

<style scoped>

  .site-navbar {
    background: #fff;
  }

  .site-navbar__header {
    text-align: center;
    background: #fff;
    max-width: 960px;
    min-width: 720px;
    margin: 0 auto;
    float: none;
  }

  .site-navbar__logo {
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }
</style>
