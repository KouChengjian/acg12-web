<template>
  <nav class="site-navbar" :class="'site-navbar--' + navbarLayoutType">

    <div class="site-navbar__header">
      <a class="site-navbar__logo">
        <img src="../assets/img/logo.png" style="width: 30px"/>
      </a>
      <el-menu :default-active="'home'" class="site-navbar__menu site-navbar__menu--left" mode="horizontal" >
        <el-menu-item index="home" @click="$router.push({ name: 'home' })">
          <a target="_blank">菜单一</a>
        </el-menu-item>

        <el-menu-item index="2" @click="$router.push({ name: 'bangumi' })">
          <a target="_blank">菜单二</a>
        </el-menu-item>

        <el-menu-item index="3" @click="$router.push({ name: 'theme' })">
          <a target="_blank">菜单三</a>
        </el-menu-item>

        <el-submenu index="4">
          <template slot="title">Git源码</template>
          <el-menu-item index="2-1"><a href="//github.com/daxiongYang/renren-fast-vue" target="_blank">前端</a>
          </el-menu-item>
          <el-menu-item index="2-2"><a href="//git.oschina.net/renrenio/renren-fast" target="_blank">后台</a>
          </el-menu-item>
          <el-menu-item index="2-3"><a href="//git.oschina.net/renrenio/renren-generator" target="_blank">代码生成器</a>
          </el-menu-item>
        </el-submenu>
      </el-menu>

      <el-menu class="site-navbar__menu site-navbar__menu--right" mode="horizontal" >
        <el-menu-item index="input">
          <form >
            <input placeholder="搜索" type="search" class="site-navbar__form site-navbar__input"/>
            <span class="site-navbar__input__icon el-icon-search"></span>
          </form>
        </el-menu-item>

        <el-menu-item index="2" @click="$router.push({ name: 'home' })">
          <a target="_blank">注册</a>
        </el-menu-item>

        <el-menu-item index="3" @click="$router.push({ name: 'theme' })">
          <a target="_blank">登入</a>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="site-navbar__body clearfix">

    </div>
    <!--&lt;!&ndash; 弹窗, 修改密码 &ndash;&gt;-->
    <!--<update-password v-if="updatePassowrdVisible" ref="updatePassowrd"></update-password>-->
  </nav>
</template>

<script>
  export default {
    created () {
    }
  }
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
    width: 100%;
    margin: 0 auto;
    float: none;
  }

  .site-navbar__logo {
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }

  .site-navbar__form {
  }

  .site-navbar__input {
    box-sizing: border-box;
    padding: .48rem 0 .48rem 1rem;
    font-size: 14px;
    color: #292f33;
    background-color: #f5f8fa;
    border: 1px solid #e1e8ed;
    border-radius: 21px;
    transition: all .2s ease-in-out;
    outline:none;
  }

  .site-navbar__input__icon {
    position: absolute;
    right: 30px;
    top: 16px;
    z-index: 2;
    color: #a6b4c3;
    cursor: pointer;
    font-size: 1.1rem;
  }
</style>
