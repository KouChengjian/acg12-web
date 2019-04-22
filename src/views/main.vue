<template>
  <div class="site-wrapper"
       :class="{ 'site-sidebar--fold': sidebarFold }"
       v-loading.fullscreen.lock="loading"
       element-loading-text="拼命加载中">
    <template v-if="!loading">
      <main-navbar />
      <div class="site-content__wrapper" :style="{ 'min-height': documentClientHeight + 'px' }">
        <main-content v-if="!$store.state.common.contentIsNeedRefresh" />
      </div>
    </template>
  </div>
</template>

<script>
  import MainNavbar from './main-navbar'
  import MainContent from './main-content'

  export default {

    data () {
      return {
        // loading: true,
      }
    },

    components: {
      MainNavbar,
      MainContent
    }
  }
</script>

<style scoped>

</style>
